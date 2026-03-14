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
                ${this.generateProjects(data)}
            </div>
        `;
    },

    generatePDF(data) {
        if (!data.fullName) return '';
        return `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; font-size: 13px; line-height: 1.5;">
            <div style="text-align:center; border-bottom: 3px solid #1d4ed8; padding-bottom: 16px; margin-bottom: 20px;">
                <h1 style="margin:0 0 8px 0; font-size: 28px; font-weight: 700; color: #1e3a8a;">${data.fullName}</h1>
                <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:16px; color:#555; font-size:12px;">
                    ${data.email    ? `<span>✉ ${data.email}</span>` : ''}
                    ${data.phone    ? `<span>📞 ${data.phone}</span>` : ''}
                    ${data.location ? `<span>📍 ${data.location}</span>` : ''}
                </div>
                <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:16px; color:#1d4ed8; font-size:12px; margin-top:6px;">
                    ${data.linkedin ? `<span>🔗 ${data.linkedin}</span>` : ''}
                    ${data.github   ? `<span>💻 ${data.github}</span>` : ''}
                </div>
            </div>

            ${data.summary ? `
            <div style="margin-bottom: 18px;">
                <h2 style="font-size:14px; font-weight:700; color:#1d4ed8; border-bottom:1px solid #d1d5db; padding-bottom:4px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Professional Summary</h2>
                <p style="color:#374151; line-height:1.6; margin:0;">${data.summary}</p>
            </div>` : ''}

            ${data.experience && data.experience.length > 0 ? `
            <div style="margin-bottom: 18px;">
                <h2 style="font-size:14px; font-weight:700; color:#1d4ed8; border-bottom:1px solid #d1d5db; padding-bottom:4px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">Work Experience</h2>
                ${data.experience.map(exp => `
                <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <strong style="font-size:14px; color:#111827;">${exp.position}</strong>
                        <span style="font-size:11px; color:#6b7280;">${exp.duration}</span>
                    </div>
                    <div style="color:#374151; font-weight:600; margin: 2px 0 4px;">${exp.company}</div>
                    ${exp.description ? `<p style="color:#4b5563; font-size:12px; margin:0; line-height:1.5;">${exp.description}</p>` : ''}
                </div>`).join('')}
            </div>` : ''}

            ${data.education && data.education.length > 0 ? `
            <div style="margin-bottom: 18px;">
                <h2 style="font-size:14px; font-weight:700; color:#1d4ed8; border-bottom:1px solid #d1d5db; padding-bottom:4px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">Education</h2>
                ${data.education.map(edu => `
                <div style="margin-bottom:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <strong style="color:#111827;">${edu.degree}</strong>
                        <span style="font-size:11px; color:#6b7280;">${edu.year}</span>
                    </div>
                    <div style="color:#374151;">${edu.institution}</div>
                    ${edu.details ? `<p style="color:#4b5563; font-size:12px; margin:4px 0 0;">${edu.details}</p>` : ''}
                </div>`).join('')}
            </div>` : ''}

            ${data.skills ? `
            <div style="margin-bottom: 18px;">
                <h2 style="font-size:14px; font-weight:700; color:#1d4ed8; border-bottom:1px solid #d1d5db; padding-bottom:4px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">Skills</h2>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${data.skills.split(',').map(s => s.trim()).filter(s => s).map(skill =>
                        `<span style="background:#dbeafe; color:#1e40af; padding:4px 12px; border-radius:999px; font-size:12px;">${skill}</span>`
                    ).join('')}
                </div>
            </div>` : ''}

            ${data.projects && data.projects.length > 0 ? `
            <div style="margin-bottom: 18px;">
                <h2 style="font-size:14px; font-weight:700; color:#1d4ed8; border-bottom:1px solid #d1d5db; padding-bottom:4px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">Projects</h2>
                ${data.projects.map(proj => `
                <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                        <strong style="font-size:13px; color:#111827;">🔨 ${proj.name}</strong>
                        ${proj.link ? `<a href="${proj.link}" style="font-size:11px; color:#1d4ed8; text-decoration:none;">${proj.link}</a>` : ''}
                    </div>
                    ${proj.tech ? `<div style="margin:3px 0; display:flex; flex-wrap:wrap; gap:4px;">
                        ${proj.tech.split(',').map(t => t.trim()).filter(t => t).map(t =>
                            `<span style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; padding:1px 8px; border-radius:999px; font-size:11px;">${t}</span>`
                        ).join('')}
                    </div>` : ''}
                    ${proj.description ? `<p style="color:#4b5563; font-size:12px; margin:3px 0 0; line-height:1.5;">${proj.description}</p>` : ''}
                </div>`).join('')}
            </div>` : ''}

        </div>`;
    },

    generateHeader(data) {
        return `
            <div class="text-center mb-6 pb-4 border-b-4 border-blue-600">
                <h1 class="text-4xl font-bold text-blue-800 mb-2">${data.fullName}</h1>
                <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    ${data.email    ? `<span>✉ ${data.email}</span>` : ''}
                    ${data.phone    ? `<span>📞 ${data.phone}</span>` : ''}
                    ${data.location ? `<span>📍 ${data.location}</span>` : ''}
                </div>
                <div class="flex flex-wrap justify-center gap-4 text-sm text-blue-600 mt-2">
                    ${data.linkedin ? `<span>🔗 LinkedIn</span>` : ''}
                    ${data.github   ? `<span>💻 GitHub</span>` : ''}
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
    },

    generateProjects(data) {
        if (!data.projects || data.projects.length === 0) return '';
        return `
            <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-700 mb-3 pb-1 border-b-2 border-gray-300">PROJECTS</h2>
                ${data.projects.map(proj => `
                    <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div class="flex justify-between items-center flex-wrap gap-1 mb-1">
                            <h3 class="font-bold text-gray-800">🔨 ${proj.name}</h3>
                            ${proj.link ? `<a href="${proj.link}" target="_blank" class="text-blue-500 text-xs hover:underline break-all">${proj.link}</a>` : ''}
                        </div>
                        ${proj.tech ? `
                        <div class="flex flex-wrap gap-1 mb-2">
                            ${proj.tech.split(',').map(t => t.trim()).filter(t => t).map(t =>
                                `<span class="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full border border-green-200">${t}</span>`
                            ).join('')}
                        </div>` : ''}
                        ${proj.description ? `<p class="text-gray-600 text-sm leading-relaxed">${proj.description}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
};
