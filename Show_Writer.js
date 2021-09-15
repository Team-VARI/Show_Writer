const button = document.querySelector(".dropbtn");

button.addEventListener("click", () => {
  const dropdown = document.querySelector(".drop-content");
  dropdown.style.display = "flex";
});


button.addEventListener("blur", () => {
  const dropdown = document.querySelector(".drop-content");
  dropdown.style.display = "none";
});