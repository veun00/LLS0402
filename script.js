document.addEventListener("DOMContentLoaded", function () {
  const storyThumbnail = document.querySelector(".highlight-img");
  const storyPopup = document.querySelector(".story-popup");
  const closePopup = document.querySelector(".story-close-btn");

  if (storyThumbnail) {
    storyThumbnail.addEventListener("click", () => {
      storyPopup.style.display = "flex";
    });
  }

  if (closePopup) {
    closePopup.addEventListener("click", () => {
      storyPopup.style.display = "none";
    });
  }
});
