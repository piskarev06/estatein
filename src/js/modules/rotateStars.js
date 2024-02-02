const rotateStars = (star) => {
  window.addEventListener("scroll", (e) => {
    star.style.setProperty("--rotation", window.scrollY);
  });
};

export const addRotateStars = (starClassName) => {
  document.querySelectorAll(starClassName).forEach(rotateStars);
};
