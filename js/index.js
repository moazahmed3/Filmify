const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 100);
});

// Active link on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

