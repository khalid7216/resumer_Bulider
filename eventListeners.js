const EventListeners = {
    init() {
        const inputs = ['fullName', 'email', 'phone', 'location', 'linkedin', 'github', 'summary', 'skills'];
        inputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => PreviewManager.update());
            }
        });
    }
};
