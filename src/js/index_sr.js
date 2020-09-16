$(document).ready(function () {
  const sr = ScrollReveal({
    reset: true,
    mobile: true,
  });

  sr.reveal('#characteristics h2', {
    scale: 0.7,
  });
  sr.reveal('#characteristics .left', {
    rotate: {
      y: 80,
    },
    duration: 1000,
  });
  sr.reveal('#characteristics .right', {
    rotate: {
      y: -80,
    },
    duration: 1000,
  });
});
