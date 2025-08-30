function toggleMobileMenu(){
  document.getElementById("menu").classList.toggle("active");
}

function waitAndCloseMenu(){
  setTimeout(() => {
      document.getElementById("menu").classList.remove("active");
    }, 1000);
}
function closeMenu(){
      document.getElementById("menu").classList.remove("active");
}

  document.addEventListener("DOMContentLoaded", function() {
    new Typed("#typing", {
      strings: ["Carlos Gómez", "Frontend Developer", "Web Designer"],
      typeSpeed: 100,
      BackSpeed: 60,
      loop: true,
    });
  });