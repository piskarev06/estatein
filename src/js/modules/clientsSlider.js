import {
  setCountOfSlides,
  addArrowListener,
  decrementCount,
  incrementCount
} from './counterHelpers';

export const clientsSlider = () => {
  const clientsSlider = new Swiper('.clients__slider', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 50,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: '.clients-button-next',
      prevEl: '.clients-button-prev'
    },
    breakpoints: {
      391: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      1605: {
        slidesPerView: 2,
        spaceBetween: 50
      }
    }
  });

  setCountOfSlides('clients__card', 'clients__count');
  addArrowListener(
    'clients__arrow--prev',
    'clients__currentCount',
    decrementCount
  );
  addArrowListener(
    'clients__arrow--next',
    'clients__currentCount',
    incrementCount
  );
};
