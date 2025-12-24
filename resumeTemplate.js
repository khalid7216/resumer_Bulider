const ResumeTemplate = {
    generate(data) {
        if (!data.fullName) {
            return '<div class="text-center text-gray-400 py-20">Fill the form to see preview...</div>';
        }

        return `
            <div class="resume-content">
                ${this.generateHeader(data)}
                ${this.generateSummary(data)}
                ${this.generateExperience(data)}
                ${this.generateEducation(data)}
                ${this.generateSkills(data)}
            </div>
        `;
    },
    
    generateHeader(data) {
        return `
            <div class="text-center mb-6 pb-4 border-b-4 border-blue-600">
                <h1 class="text-4xl font-bold text-blue-800 mb-2">${data.fullName}</h1>
                <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    ${data.email ? `<span> ${data.email}</span>` : ''}
                    ${data.phone ? `<span> ${data.phone}</span>` : ''}
                    ${data.location ? `<span> ${data.location}</span>` : ''}
                </div>
                <div class="flex flex-wrap justify-center gap-4 text-sm text-blue-600 mt-2">
                    ${data.linkedin ? `<span> LinkedIn</span>` : ''}
                    ${data.github ? `<span> GitHub</span>` : ''}
                </div>
            </div>
        `;
    },
    
    generateSummary(data) {
        if (!data.summary) return '';
        return `
            <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-700 mb-2 pb-1 border-b-2 border-gray-300">PROFESSIONAL SUMMARY</h2>
                <p class="text-gray-700 leading-relaxed">${data.summary}</p>
            </div>
        `;
    },
    
    generateExperience(data) {
        if (!data.experience || data.experience.length === 0) return '';
        return `
            <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-700 mb-3 pb-1 border-b-2 border-gray-300">WORK EXPERIENCE</h2>
                ${data.experience.map(exp => `
                    <div class="mb-4">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-bold text-lg text-gray-800">${exp.position}</h3>
                            <span class="text-sm text-gray-600">${exp.duration}</span>
                        </div>
                        <p class="text-gray-700 font-semibold mb-2">${exp.company}</p>
                        ${exp.description ? `<p class="text-gray-600 text-sm leading-relaxed">${exp.description}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },
    
    generateEducation(data) {
        if (!data.education || data.education.length === 0) return '';
        return `
            <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-700 mb-3 pb-1 border-b-2 border-gray-300">EDUCATION</h2>
                ${data.education.map(edu => `
                    <div class="mb-3">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-bold text-gray-800">${edu.degree}</h3>
                            <span class="text-sm text-gray-600">${edu.year}</span>
                        </div>
                        <p class="text-gray-700">${edu.institution}</p>
                        ${edu.details ? `<p class="text-gray-600 text-sm mt-1">${edu.details}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },
    
    generateSkills(data) {
        if (!data.skills) return '';
        return `
            <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-700 mb-2 pb-1 border-b-2 border-gray-300">SKILLS</h2>
                <div class="flex flex-wrap gap-2">
                    ${data.skills.split(',').map(s => s.trim()).filter(s => s).map(skill => 
                        `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
};
