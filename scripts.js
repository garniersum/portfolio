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