// Project data array - Add your projects here!
const projectsData = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description: "Used Decision Trees & Logistic Regression to predict customer churn with 85% accuracy.",
    image: "assets/images/project1.jpg",
    links: [
      { 
        name: "GitHub", 
        url: "https://github.com/rheageorge179/Customer-Churn-Prediction-using-ML", 
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: 2,
    title: "Healthcare Infrastructure",
    category: "Cloud Computing",
    description: "Deployed a cloud-hosted database (AWS EC2) that improved data retrieval speed by 40%.",
    image: "assets/images/project2.jpg",
    links: [
      { 
        name: "Details", 
        url: "#", 
        icon: "fas fa-link"
      }
    ]
  },
  {
    id: 3,
    title: "Dashboard Automation",
    category: "Data Visualization",
    description: "Built Tableau and Power BI dashboards to enhance reporting capabilities at TAMU & Accenture.",
    image: "assets/images/project3.jpg",
    links: [
      { 
        name: "Details", 
        url: "#", 
        icon: "fas fa-link"
      }
    ]
  },
  // Add more projects here as needed!
];

// Function to render project cards
function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer) {
    console.error('Projects container not found');
    return;
  }
  
  projectsContainer.innerHTML = '';
  
  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-lg-4 col-md-6';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    let linksHTML = '';
    if (project.links && project.links.length > 0) {
      linksHTML = '<div class="project-links">';
      project.links.forEach(link => {
        linksHTML += `
          <a href="${link.url}" class="btn btn-sm btn-primary" target="_blank">
            <i class="<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>l</mi><mi>i</mi><mi>n</mi><mi>k</mi><mi mathvariant="normal">.</mi><mi>i</mi><mi>c</mi><mi>o</mi><mi>n</mi></mrow><mi>m</mi><mi>e</mi><mo>−</mo><mn>1</mn><mi mathvariant="normal">&quot;</mi><mo>&gt;</mo><mo>&lt;</mo><mi mathvariant="normal">/</mi><mi>i</mi><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">{link.icon} me-1&quot;&gt;&lt;/i&gt; </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal" style="margin-right:0.03148em;">ink</span><span class="mord">.</span><span class="mord mathnormal">i</span><span class="mord mathnormal">co</span><span class="mord mathnormal">n</span></span><span class="mord mathnormal">m</span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord">1&quot;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">/</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span>{link.name}
          </a>
        `;
      });
      linksHTML += '</div>';
    }
    
    projectCard.innerHTML = `
      <div class="project-card">
        <img src="<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>j</mi><mi>e</mi><mi>c</mi><mi>t</mi><mi mathvariant="normal">.</mi><mi>i</mi><mi>m</mi><mi>a</mi><mi>g</mi><mi>e</mi></mrow><mi mathvariant="normal">&quot;</mi><mi>a</mi><mi>l</mi><mi>t</mi><mo>=</mo><mi mathvariant="normal">&quot;</mi></mrow><annotation encoding="application/x-tex">{project.image}&quot; alt=&quot;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mord mathnormal">ro</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord mathnormal">ec</span><span class="mord mathnormal">t</span><span class="mord">.</span><span class="mord mathnormal">ima</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">e</span></span><span class="mord">&quot;</span><span class="mord mathnormal">a</span><span class="mord mathnormal">lt</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">&quot;</span></span></span></span>{project.title}" class="project-image">
        <div class="project-content">
          <div class="project-category">${project.category}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>j</mi><mi>e</mi><mi>c</mi><mi>t</mi><mi mathvariant="normal">.</mi><mi>d</mi><mi>e</mi><mi>s</mi><mi>c</mi><mi>r</mi><mi>i</mi><mi>p</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow><mo>&lt;</mo><mi mathvariant="normal">/</mi><mi>p</mi><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">{project.description}&lt;/p&gt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mord mathnormal">ro</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord mathnormal">ec</span><span class="mord mathnormal">t</span><span class="mord">.</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">escr</span><span class="mord mathnormal">i</span><span class="mord mathnormal">pt</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">/</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span>{linksHTML}
        </div>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
