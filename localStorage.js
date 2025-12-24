const LocalStorageManager = {
    STORAGE_KEY: 'resumeBuilderData',
    
    save() {
        const data = FormDataManager.collect();
        const stateData = {
            formData: data,
            experienceCount: AppState.getExperienceCount(),
            educationCount: AppState.getEducationCount(),
            timestamp: new Date().toISOString()
        };
        
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stateData));
            this.showNotification('✅ Data saved successfully!', 'success');
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            this.showNotification('❌ Error saving data!', 'error');
            return false;
        }
    },
    
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (!saved) return null;
            
            const data = JSON.parse(saved);
            return data;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    },
    
    clear() {
        if (confirm('Are you sure you want to clear all saved data?')) {
            localStorage.removeItem(this.STORAGE_KEY);
            this.showNotification('🗑️ Data cleared!', 'info');
            location.reload();
        }
    },
    
    autoSave() {
        // Auto-save every 30 seconds
        setInterval(() => {
            this.save();
        }, 30000);
    },
    
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold z-50 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;
        notification.style.animation = 'slideIn 0.3s ease-out';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    },
    
    restoreFormData(data) {
        // Restore basic fields
        const fields = ['fullName', 'email', 'phone', 'location', 'linkedin', 'github', 'summary', 'skills'];
        fields.forEach(field => {
            const element = document.getElementById(field);
            if (element && data.formData[field]) {
                element.value = data.formData[field];
            }
        });
        
        // Restore experience entries
        if (data.formData.experience && data.formData.experience.length > 0) {
            // Clear existing
            document.getElementById('experienceContainer').innerHTML = '';
            AppState.experienceCount = 0;
            
            data.formData.experience.forEach(exp => {
                ExperienceManager.add();
                const id = AppState.getExperienceCount() - 1;
                document.getElementById(`expCompany-${id}`).value = exp.company || '';
                document.getElementById(`expPosition-${id}`).value = exp.position || '';
                document.getElementById(`expDuration-${id}`).value = exp.duration || '';
                document.getElementById(`expDesc-${id}`).value = exp.description || '';
            });
        }
        
        // Restore education entries
        if (data.formData.education && data.formData.education.length > 0) {
            // Clear existing
            document.getElementById('educationContainer').innerHTML = '';
            AppState.educationCount = 0;
            
            data.formData.education.forEach(edu => {
                EducationManager.add();
                const id = AppState.getEducationCount() - 1;
                document.getElementById(`eduInstitution-${id}`).value = edu.institution || '';
                document.getElementById(`eduDegree-${id}`).value = edu.degree || '';
                document.getElementById(`eduYear-${id}`).value = edu.year || '';
                document.getElementById(`eduDetails-${id}`).value = edu.details || '';
            });
        }
        
        PreviewManager.update();
        this.showNotification('📂 Data loaded successfully!', 'success');
    }
};

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);