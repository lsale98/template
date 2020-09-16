$(document).ready(function () {
  const sr = ScrollReveal({
    reset: true,
    mobile: true,
  });

  sr.reveal('#project #project__image', {
    origin: 'left',
    distance: '50px',
    opacity: 0.5,
    duration: 1000,
  });

  sr.reveal('#project #project__text', {
    scale: 0.7,
    opacity: 0.5,
    duration: 1000,
  });
});
