import {
  setCountOfSlides,
  addArrowListener,
  decrementCount,
  incrementCount
} from './counterHelpers';

export const faqSlider = () => {
  const faqSlider = new Swiper('.faq__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: '.faq-button-next',
      prevEl: '.faq-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1251: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1604: {
        spaceBetween: 30
      }
    }
  });

  setCountOfSlides('faq__card', 'faq__count');
  addArrowListener('faq__arrow--prev', 'faq__currentCount', decrementCount);
  addArrowListener('faq__arrow--next', 'faq__currentCount', incrementCount);
};
