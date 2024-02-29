import {
  setCountOfSlides,
  addArrowListener,
  decrementCount,
  incrementCount
} from './counterHelpers';

export const reviewsSlider = () => {
  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev'
    },
    breakpoints: {
      391: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      1605: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  setCountOfSlides('reviews__card', 'reviews__count');
  addArrowListener(
    'reviews__arrow--prev',
    'reviews__currentCount',
    decrementCount
  );
  addArrowListener(
    'reviews__arrow--next',
    'reviews__currentCount',
    incrementCount
  );
};
