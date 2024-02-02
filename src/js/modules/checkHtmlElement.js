export const checkHtmlElement = (className, cb) => {
  if (document.querySelector(className) !== null) cb();
};
