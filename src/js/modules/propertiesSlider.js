import {
  decrementCount,
  incrementCount,
  addArrowListener,
  setCountOfSlides
} from './counterHelpers';

export const propertiesSlider = () => {
  const propertiesSlider = new Swiper('.properties__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: '.properties-button-next',
      prevEl: '.properties-button-prev'
    },
    breakpoints: {
      1251: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1326: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1605: {
        spaceBetween: 30
      }
    }
  });

  setCountOfSlides('properties__card', 'properties__count');
  addArrowListener(
    'properties__arrow--prev',
    'properties__currentCount',
    decrementCount
  );
  addArrowListener(
    'properties__arrow--next',
    'properties__currentCount',
    incrementCount
  );
};
