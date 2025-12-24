const PreviewManager = {
    update() {
        const data = FormDataManager.collect();
        const html = ResumeTemplate.generate(data);
        document.getElementById('resumePreview').innerHTML = html;
    },
    
    toggle() {
        this.update();
        const preview = document.getElementById('resumePreview');
        preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
