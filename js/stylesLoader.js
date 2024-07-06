const addStylesheet = (src) => {
  if (document.createStylesheet) {
    document.createStylesheet(src);
  } else {
    const element = document.createElement('link');
    element.href = src;
    element.rel = 'stylesheet';
    element.type = 'text/css';

    document.querySelector('head').appendChild(element);
  }
}

const stylesheets = [
  'css/owl.carousel.css',
  'css/owl.transitions.css',
];

stylesheets.forEach(src => {
  addStylesheet(src);
});
