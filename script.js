console.log("hello :)");

function toggleDisplay() {
  const dropdown = document.querySelector(".dropdown");
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
