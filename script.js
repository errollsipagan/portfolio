window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("text-blue-500", "font-semibold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-500", "font-semibold");
    }
  });
});

const texts = [
    "Senior Software Engineer | Full-Stack Developer",
    "Building Scalable Web Apps with React, Node.js and Java",
    "Creating Modern, User-Focused Digital Solutions"
];

const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (!deleting) {
    typingElement.textContent = currentText.slice(0, ++charIndex);
    if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeEffect, 2000); // pause before deleting
        return;
    }
    } else {
    typingElement.textContent = currentText.slice(0, --charIndex);
    if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    }

    const speed = deleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

window.addEventListener("load", () => {
    typeEffect();
});