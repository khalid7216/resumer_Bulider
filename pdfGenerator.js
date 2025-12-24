const PDFGenerator = {
    download() {
        const data = FormDataManager.collect();
        const validation = FormDataManager.validate(data);
        
        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        const element = document.createElement('div');
        element.style.padding = '40px';
        element.style.backgroundColor = 'white';
        element.innerHTML = ResumeTemplate.generate(data);

        const opt = {
            margin: 10,
            filename: `${data.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    }
};
