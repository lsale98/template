$(document).ready(function () {
  const sr = ScrollReveal({
    reset: true,
    mobile: true,
  });
  sr.reveal('#goals__items .item .item__image', {
    rotate: {
      y: 80,
    },
    duration: 1000,
  });
  sr.reveal('#goals__items .item .item__content', {
    rotate: {
      y: -80,
    },
    duration: 1000,
  });
});
