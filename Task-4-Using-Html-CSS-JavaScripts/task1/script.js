const toggleButton = document.querySelector("#toggleBio");
const bio = document.querySelector("#bio");

toggleButton.addEventListener("click", () => {
  bio.hidden = !bio.hidden;
  toggleButton.textContent = bio.hidden ? "Show more" : "Show less";
});
