export const addStepsAnimationVariables = () => {
  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    document.body.style.setProperty('--mouse-x', clientX + 'px');
    document.body.style.setProperty('--mouse-y', clientY + 'px');
  });
};
