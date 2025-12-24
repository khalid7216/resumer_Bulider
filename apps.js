const App = {
    init() {
        // Check if there's saved data
        const savedData = LocalStorageManager.load();
        
        if (savedData) {
            // Restore saved data
            LocalStorageManager.restoreFormData(savedData);
        } else {
            // Add initial entries if no saved data
            ExperienceManager.add();
            EducationManager.add();
        }
        
        // Setup event listeners
        EventListeners.init();
        
        // Initial preview update
        PreviewManager.update();
        
        // Start auto-save
        LocalStorageManager.autoSave();
        
        console.log('Resume Builder initialized successfully!');
        console.log('Features: Auto-save enabled, LocalStorage active');
    }
};

// Initialize app when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    App.init();
});
