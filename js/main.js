window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let menu_icon = document.querySelector(".menu-icon");
  if (window.scrollY > 32) {
    menu_icon.classList.add("moveToTop");
    header.classList.add("scrolled");
  } else {
    menu_icon.classList.remove("moveToTop");
    header.classList.remove("scrolled");
  }
});
document.querySelector(".learn_more").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollBy({
    top: window.innerHeight / 10,
    left: 0,
    behavior: "smooth",
  });
});

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active"); 
  menuToggle.classList.toggle("active"); 
  document.body.classList.toggle("no-scroll"); 
});

const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const subscribersOdometer = document.querySelector(".treatment-odometer");
createOdometer(subscribersOdometer, 876031);

const videosOdometer = document.querySelector(".productivity-odometer");
createOdometer(videosOdometer, 3060);

const projectsOdometer = document.querySelector(".total-odometer");
createOdometer(projectsOdometer, 71);
