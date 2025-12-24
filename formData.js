const FormDataManager = {
    collect() {
        return {
            fullName: document.getElementById('fullName')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            location: document.getElementById('location')?.value || '',
            linkedin: document.getElementById('linkedin')?.value || '',
            github: document.getElementById('github')?.value || '',
            summary: document.getElementById('summary')?.value || '',
            experience: ExperienceManager.getData(),
            education: EducationManager.getData(),
            skills: document.getElementById('skills')?.value || ''
        };
    },
    
    validate(data) {
        if (!data.fullName) {
            return { valid: false, message: 'Please fill in at least your name!' };
        }
        return { valid: true };
    }
};