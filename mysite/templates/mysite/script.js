document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      menuToggle.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
  
  // Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      
      // Save preference to localStorage
      localStorage.setItem('theme', document.body.getAttribute('data-theme'));
      
      // Update icon
      const icon = themeToggle.querySelector('i');
      if (document.body.getAttribute('data-theme') === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
      const icon = themeToggle.querySelector('i');
      if (savedTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
      }
    }
  }
  
  // Add animation class to elements
  const animateElements = document.querySelectorAll('.feature-card, .belief-card, .resource-card, .pillar-card');
  animateElements.forEach((element, index) => {
    element.classList.add('fade-in');
    element.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Pillar details functionality
  const detailButtons = document.querySelectorAll('.details-btn');
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const pillar = this.getAttribute('data-pillar');
      let message = '';
      
      switch(pillar) {
        case 'prayer':
          message = 'Muslims perform five daily prayers at prescribed times: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer consists of units called rak\'ahs with specific recitations and physical postures.';
          break;
        case 'charity':
          message = 'Zakat is an obligatory charity of 2.5% of one\'s accumulated wealth (above a minimum threshold) given annually to specified categories of recipients, including the poor and needy. It purifies wealth and fosters social responsibility.';
          break;
        case 'fasting':
          message = 'During Ramadan, Muslims abstain from food, drink, and marital relations from dawn to sunset. The fast develops self-discipline, gratitude, and empathy for the less fortunate. The month culminates in Eid al-Fitr celebrations.';
          break;
        case 'hajj':
          message = 'Hajj occurs annually in the Islamic month of Dhul-Hijjah. Pilgrims perform rites including circumambulating the Kaaba, standing at Arafat, and symbolic stoning of pillars. It commemorates Prophet Ibrahim\'s devotion and unites Muslims worldwide.';
          break;
        default:
          message = 'More information about this pillar will be available soon.';
      }
      
      alert(message);
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});