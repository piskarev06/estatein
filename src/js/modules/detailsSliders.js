export const detailsSliders = () => {
  const detailsSliderSm = new Swiper('.details__slider--sm', {
    direction: 'horizontal',
    slidesPerView: 9,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: false
  });

  const detailsSlider = new Swiper('.details__slider', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: '.details-button-next',
      prevEl: '.details-button-prev'
    },
    pagination: {
      el: '.details-pagination'
    },
    thumbs: {
      swiper: detailsSliderSm
    }
  });

  // const swipeAllSliders = (index) => {
  //   detailsSliderSm.slideToLoop(index);
  //   detailsSlider.slideToLoop(index);
  // };

  // detailsSliderSm.on('slideChange', () =>
  //   swipeAllSliders(detailsSliderSm.realIndex)
  // );
  // detailsSlider.on('slideChange', () =>
  //   swipeAllSliders(detailsSlider.realIndex)
  // );
};
