const ProjectManager = {
    add() {
        const container = document.getElementById('projectContainer');
        const id = AppState.incrementProject();

        const projDiv = document.createElement('div');
        projDiv.className = 'mb-4 p-4 border rounded bg-gray-50';
        projDiv.id = `proj-${id}`;
        projDiv.innerHTML = `
            <input type="text" id="projName-${id}" placeholder="Project Name" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="projLink-${id}" placeholder="Project Link (e.g., https://github.com/...)" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <input type="text" id="projTech-${id}" placeholder="Technologies Used (e.g., React, Node.js)" class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()">
            <textarea id="projDesc-${id}" rows="2" placeholder="Brief project description..." class="w-full mb-2 p-2 border rounded" oninput="PreviewManager.update()"></textarea>
            <button onclick="ProjectManager.remove(${id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Remove</button>
        `;
        container.appendChild(projDiv);
        PreviewManager.update();
    },

    remove(id) {
        document.getElementById(`proj-${id}`)?.remove();
        PreviewManager.update();
    },

    getData() {
        const projects = [];
        for (let i = 0; i < AppState.getProjectCount(); i++) {
            const name = document.getElementById(`projName-${i}`)?.value;
            if (name) {
                projects.push({
                    name,
                    link: document.getElementById(`projLink-${i}`)?.value || '',
                    tech: document.getElementById(`projTech-${i}`)?.value || '',
                    description: document.getElementById(`projDesc-${i}`)?.value || ''
                });
            }
        }
        return projects;
    }
};
