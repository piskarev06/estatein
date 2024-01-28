import { decrementCount, incrementCount, addArrowListener, setCountOfSlides } from "./counterHelpers";

export const propertiesSlider = () => {
  const propertiesSlider = new Swiper(".properties__slider", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: ".properties-button-next",
      prevEl: ".properties-button-prev",
    },
  });
};

setCountOfSlides("properties__card", "properties__count")
addArrowListener("properties__arrow--prev", 'properties__currentCount', decrementCount)
addArrowListener("properties__arrow--next", 'properties__currentCount', incrementCount)

