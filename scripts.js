fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectContainer = document.querySelector(".project-container");
        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            projectDiv.innerHTML = `
                <a href="${project.url}" target="_blank">
                    <img src="${project.image}" alt="${project.title}">
                    <p>${project.title}</p>
                </a>`;
            projectContainer.appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error loading projects:', error));
