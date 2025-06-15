// Typed.js initialization
var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Freelancer.', 'Video Editer.'],
    typeSpeed: 60,
});











document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.origin + window.location.pathname;
  const navLinks = document.querySelectorAll(".right a");

  navLinks.forEach(link => {
    // Convert both sides to avoid mismatch due to trailing slash
    const linkURL = new URL(link.href).href;

    if (
      linkURL === currentURL ||
      // Special handling for index/home
      (linkURL.endsWith("/index.html") && 
       (currentURL.endsWith("/") || currentURL.endsWith("/index.html") || currentURL.endsWith("/home")))
    ) {
      link.classList.add("active");
    }
  });

  // Optional hamburger logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".right");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
