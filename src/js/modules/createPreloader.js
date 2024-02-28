export const createPreloader = () => {
  let preloader = document.getElementById('preloader');
  document.body.classList.add('noscroll');

  window.addEventListener('load', () => {
    document.body.classList.remove('noscroll');
    preloader.classList.add('preloader--hide');
  });
};
