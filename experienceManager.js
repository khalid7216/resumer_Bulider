const ExperienceManager = {
    add() {
        const container = document.getElementById('experienceContainer');
        const id = AppState.incrementExperience();
        
        const expDiv = document.createElement('div');
        expDiv.className = 'mb-4 p-4 border rounded bg-gray-50';
        expDiv.id = `exp-${id}`;
        expDiv.innerHTML = `
            <input type="text" id="expCompany-${id}" placeholder="Company Name" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="expPosition-${id}" placeholder="Position" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="expDuration-${id}" placeholder="Duration (e.g., Jan 2020 - Dec 2022)" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <textarea id="expDesc-${id}" rows="3" placeholder="Job description and achievements..." class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()"></textarea>
            <button onclick="ExperienceManager.remove(${id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Remove</button>
        `;
        container.appendChild(expDiv);
        PreviewManager.update();
    },
    
    remove(id) {
        document.getElementById(`exp-${id}`)?.remove();
        PreviewManager.update();
    },
    
    getData() {
        const experiences = [];
        for (let i = 0; i < AppState.getExperienceCount(); i++) {
            const company = document.getElementById(`expCompany-${i}`)?.value;
            if (company) {
                experiences.push({
                    company,
                    position: document.getElementById(`expPosition-${i}`)?.value || '',
                    duration: document.getElementById(`expDuration-${i}`)?.value || '',
                    description: document.getElementById(`expDesc-${i}`)?.value || ''
                });
            }
        }
        return experiences;
    }
};
