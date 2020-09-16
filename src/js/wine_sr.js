$(document).ready(function () {
  const sr = ScrollReveal({
    reset: true,
    mobile: true,
  });

  sr.reveal('#wines .wine', {
    origin: 'top',
    distance: '50px',
    opacity: 0,
    duration: 1500,
  });
});
