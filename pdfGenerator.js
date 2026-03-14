const PDFGenerator = {
    download() {
        const data = FormDataManager.collect();
        const validation = FormDataManager.validate(data);
        
        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        // Loading state
        const btn = document.querySelector('button[onclick="PDFGenerator.download()"]');
        if (btn) { btn.textContent = '⏳ Generating...'; btn.disabled = true; }

        // FIX 1: position:absolute + visibility:hidden
        // html2canvas "fixed" elements ko off-screen capture NAHI karta — yahi blank PDF ka asli reason tha
        const element = document.createElement('div');
        element.style.cssText = `
            width: 794px;
            padding: 40px;
            background-color: white;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -9999;
            visibility: hidden;
        `;

        // FIX 2: generatePDF() use karo jo inline styles use karta hai
        // Tailwind CDN classes off-screen cloned elements mein apply nahi hoti
        element.innerHTML = ResumeTemplate.generatePDF(data);
        document.body.appendChild(element);

        // FIX 3: requestAnimationFrame + longer timeout = element fully rendered hone ka wait
        requestAnimationFrame(() => {
            setTimeout(() => {
                const opt = {
                    margin: [8, 8, 8, 8],
                    filename: `${data.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        letterRendering: true,
                        scrollY: 0,
                        scrollX: 0,
                        // FIX 4: Actual rendered size use karo, scrollHeight/Width nahi
                        width: element.offsetWidth,
                        height: element.offsetHeight,
                        // FIX 5: Clone mein visibility:visible karo taake capture ho
                        onclone: (clonedDoc) => {
                            const els = clonedDoc.querySelectorAll('[style]');
                            els.forEach(el => {
                                if (el.style.visibility === 'hidden') {
                                    el.style.visibility = 'visible';
                                }
                            });
                        }
                    },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save()
                    .then(() => {
                        document.body.removeChild(element);
                        if (btn) { btn.textContent = '📄 Download PDF'; btn.disabled = false; }
                    })
                    .catch(err => {
                        console.error("PDF Error:", err);
                        document.body.removeChild(element);
                        if (btn) { btn.textContent = '📄 Download PDF'; btn.disabled = false; }
                        alert('PDF generation failed. Please try again.');
                    });
            }, 600);
        });
    }
};