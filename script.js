<<<<<<< HEAD
/****** nav bar  ******/

=======
>>>>>>> 39bf799b9e844de2adb14f46181ce96aff784179
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
<<<<<<< HEAD

/*** nav bar end ***/
=======
>>>>>>> 39bf799b9e844de2adb14f46181ce96aff784179
