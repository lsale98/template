$(document).ready(function () {
  $('#menu').on('click', function () {
    $('#wrapper__sidenav, #wrapper__content').toggleClass('active');
  });

  // Change active wineries
  $('#wrapper__sidenav .list-group a').on('click', function () {
    $('#wrapper__sidenav, #wrapper__content').addClass('active');

    $('#wrapper__sidenav .list-group a').removeClass('active');

    $(this).addClass('active');
  });
});
