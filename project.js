/**
 * Projects data and management for portfolio site
 * This file allows easy addition of new projects without modifying HTML structure
 */

// Array of projects with their details
const projects = [
  {
    id: 1,
    title: "Churn Prediction",
    description: "Used Decision Trees & Logistic Regression to predict churn with 85% accuracy.",
    image: "assets/images/project-churn.jpg", // Default image, can be updated
    category: "data-analytics",
    tags: ["Machine Learning", "Python", "Classification"],
    githubLink: "https://github.com/rheageorge179/Customer-Churn-Prediction-using-ML",
    demoLink: ""
  },
  {
    id: 2,
    title: "Healthcare Infrastructure",
    description: "Deployed a cloud-hosted DB (AWS EC2) that improved data retrieval speed by 40%.",
    image: "assets/images/project-healthcare.jpg", // Default image, can be updated
    category: "cloud",
    tags: ["AWS", "EC2", "Database", "Healthcare"],
    githubLink: "",
    demoLink: ""
  },
  {
    id: 3,
    title: "Dashboard Automation",
    description: "Built Tableau and Power BI dashboards to enhance reporting at TAMU & Accenture.",
    image: "assets/images/project-dashboard.jpg", // Default image, can be updated
    category: "visualization",
    tags: ["Tableau", "Power BI", "Data Visualization"],
    githubLink: "",
    demoLink: ""
  }
];

/**
 * Creates HTML for a project card
 * @param {Object} project - Project data
 * @return {string} HTML string for the project card
 */
function createProjectCard(project) {
  // Create tags HTML
  const tagsHtml = project.tags.map(tag => 
    `<span class="project-tag">${tag}</span>`
  ).join('');
  
  // Create links HTML (only add links that exist)
  let linksHtml = '';
  if (project.githubLink) {
    linksHtml += `<a href="${project.githubLink}" class="project-link" target="_blank">GitHub <i class="fas fa-external-link-alt"></i></a>`;
  }
  if (project.demoLink) {
    linksHtml += `<a href="${project.demoLink}" class="project-link" target="_blank">View Demo <i class="fas fa-external-link-alt"></i></a>`;
  }

  // Default image fallback if image not provided
  const imagePath = project.image || "assets/images/project-placeholder.jpg";
  
  return `
    <div class="col-md-4 col-sm-6 project-item ${project.category}">
      <div class="project-card">
        <div class="project-img-container">
          <img src="${imagePath}" alt="${project.title}" class="project-img">
          <div class="project-overlay"></div>
        </div>
        <div class="project-content">
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="project-links">
            ${linksHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Loads all projects into the projects container
 */
function loadProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  if (!projectsContainer) return;
  
  // Create HTML for all projects and add to container
  const projectsHtml = projects.map(project => createProjectCard(project)).join('');
  projectsContainer.innerHTML = projectsHtml;
}

/**
 * Add a new project to the portfolio
 * This can be called from the browser console to dynamically add a project
 * 
 * @param {Object} projectData - Project data object
 * @param {string} projectData.title - Project title
 * @param {string} projectData.description - Project description
 * @param {string} projectData.image - Path to project image (optional)
 * @param {string} projectData.category - Project category (data-analytics, cloud, visualization)
 * @param {Array<string>} projectData.tags - Array of project tags
 * @param {string} projectData.githubLink - GitHub repository link (optional)
 * @param {string} projectData.demoLink - Demo link (optional)
 */
function addProject(projectData) {
  // Validate required fields
  if (!projectData.title || !projectData.description || !projectData.category) {
    console.error('Project must include title, description, and category');
    return;
  }
  
  // Generate a new ID
  const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
  
  // Add the new project with ID
  const newProject = {
    id: newId,
    tags: [],  // Default empty array if not provided
    ...projectData
  };
  
  // Add to projects array
  projects.push(newProject);
  
  // Reload projects to display the new one
  loadProjects();
  
  console.log(`Project "${newProject.title}" added successfully!`);
  return newProject.id;
}

/**
 * Remove a project by ID
 * @param {number} id - Project ID to remove
 */
function removeProject(id) {
  const initialLength = projects.length;
  const index = projects.findIndex(project => project.id === id);
  
  if (index !== -1) {
    projects.splice(index, 1);
    loadProjects();
    console.log(`Project with ID ${id} removed successfully!`);
  } else {
    console.error(`No project found with ID ${id}`);
  }
  
  return projects.length < initialLength;
}

/**
 * Update an existing project
 * @param {number} id - Project ID to update
 * @param {Object} updatedData - New data to update project with
 */
function updateProject(id, updatedData) {
  const index = projects.findIndex(project => project.id === id);
  
  if (index !== -1) {
    // Update the project but maintain the same ID
    projects[index] = {
      ...projects[index],
      ...updatedData,
      id: projects[index].id
    };
    
    loadProjects();
    console.log(`Project with ID ${id} updated successfully!`);
    return true;
  } else {
    console.error(`No project found with ID ${id}`);
    return false;
  }
}

// Export functions for external use (if needed)
window.portfolioProjects = {
  add: addProject,
  remove: removeProject,
  update: updateProject,
  getAll: () => [...projects]
};
