

// const menuToggle = document.getElementById("menuToggle");
// const menu = document.getElementById("menu");

// menuToggle.addEventListener("click", function () {
//   menu.classList.toggle("active");
//   menuToggle.classList.toggle("active");
//   document.body.classList.toggle("no-scroll");
// });
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  if (menu.classList.contains("active")) {
    // Add 'closing' class for animation before removing 'active'
    menu.classList.add("closing");

    setTimeout(() => {
      menu.classList.remove("active", "closing");
      document.body.classList.remove("no-scroll");
      menuToggle.classList.remove("active");
    }, 100); // Wait for animation to complete (matches CSS transition time)
  } else {
    // Open the menu normally
    menu.classList.add("active");
    menuToggle.classList.add("active");
    document.body.classList.add("no-scroll");
  }
});


