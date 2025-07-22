console.log("hello :)");

const dropdown = document.querySelector(".dropdown");
function toggleDisplay() {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

const about = document.querySelector(".about");
about.addEventListener("click", function () {
  toggleDisplay();
});
