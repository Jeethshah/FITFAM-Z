// Get necessary elements from the DOM
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Add event listener to toggle navigation menu on menu button click
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open"); // Toggle 'open' class on navLinks

  // Check if navigation menu is open or closed and change menu button icon accordingly
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add event listener to close navigation menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open"); // Remove 'open' class from navLinks
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Change menu button icon to default
});

// Define options for ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Apply ScrollReveal animation to header content elements
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Apply ScrollReveal animation to about section cards
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

// Apply ScrollReveal animation to trainer section cards
ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Apply ScrollReveal animation to blog section cards
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Initialize Swiper for carousel functionality
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
