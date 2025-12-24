const EducationManager = {
    add() {
        const container = document.getElementById('educationContainer');
        const id = AppState.incrementEducation();
        
        const eduDiv = document.createElement('div');
        eduDiv.className = 'mb-4 p-4 border rounded bg-gray-50';
        eduDiv.id = `edu-${id}`;
        eduDiv.innerHTML = `
            <input type="text" id="eduInstitution-${id}" placeholder="Institution Name" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="eduDegree-${id}" placeholder="Degree/Certificate" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="eduYear-${id}" placeholder="Year (e.g., 2018-2022)" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <textarea id="eduDetails-${id}" rows="2" placeholder="Additional details..." class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()"></textarea>
            <button onclick="EducationManager.remove(${id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Remove</button>
        `;
        container.appendChild(eduDiv);
        PreviewManager.update();
    },
    
    remove(id) {
        document.getElementById(`edu-${id}`)?.remove();
        PreviewManager.update();
    },
    
    getData() {
        const education = [];
        for (let i = 0; i < AppState.getEducationCount(); i++) {
            const institution = document.getElementById(`eduInstitution-${i}`)?.value;
            if (institution) {
                education.push({
                    institution,
                    degree: document.getElementById(`eduDegree-${i}`)?.value || '',
                    year: document.getElementById(`eduYear-${i}`)?.value || '',
                    details: document.getElementById(`eduDetails-${i}`)?.value || ''
                });
            }
        }
        return education;
    }
};
