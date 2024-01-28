export const decrementCount = (counterId) => {
  document.getElementById(counterId).innerText -= 1;
};

export const incrementCount = (counterId) => {
  document.getElementById(counterId).innerText = +document.getElementById(counterId).innerText + 1
};

export const addArrowListener = (arrowId, counterId, countAction) => {
  document
    .getElementById(arrowId)
    .addEventListener("click", () => countAction(counterId));
};

export const setCountOfSlides = (slidesClassName, counterClassName) => {
  let countOfSlides = document.getElementsByClassName(slidesClassName).length;
  document.getElementsByClassName(counterClassName)[0].lastChild.textContent =
    countOfSlides;
};
