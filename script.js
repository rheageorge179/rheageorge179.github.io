document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true,
    offset: 200
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Highlight active section in navbar
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu collapse after click
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      const projectItems = document.querySelectorAll('.project-item');
      
      projectItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'block';
        } else if (item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Load projects from projects.js
  loadProjects();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Function to animate numbers (if any counter is added in the future)
function animateNumbers() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCount();
  });
}
