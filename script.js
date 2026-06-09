const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const controls = Array.from(document.querySelectorAll(".control"));
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks && !window.bootstrap) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (menuButton && navLinks) {
  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

controls.forEach((button) => {
  button.addEventListener("click", () => {
    const nextIndex = Number(button.dataset.slide);

    testimonials.forEach((item, index) => {
      item.classList.toggle("active", index === nextIndex);
    });

    controls.forEach((control, index) => {
      control.classList.toggle("active", index === nextIndex);
    });
  });
});
