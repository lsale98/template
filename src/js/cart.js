let cart = [];

$('.wine .wine__info .cart').on('click', function () {
  let Qty = 1;
  let products = {};

  products.id = event.path[2].dataset.id;
  products.name = event.path[2].dataset.name;
  products.price = event.path[2].dataset.price;
  products.qty = Qty;

  if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));

    cart = [products, ...cart];

    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    cart = [products];

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach((c) => {
      if (c.id == event.path[2].dataset.id) {
        $(this).addClass('disabled');
        event.target.textContent = 'U korpi';
      }
    });
  }
  countItems();
});

function countItems() {
  let listaProizvoda = [];

  if (localStorage.getItem('cart') !== null) {
    listaProizvoda = JSON.parse(localStorage.getItem('cart'));
    $('#cart #items')[0].textContent = listaProizvoda.length;
  } else {
    $('#cart #items')[0].textContent = 0;
  }
}

$(document).ready(function () {
  countItems();

  let vina = $('.wine');
  let listaProizvoda = [];

  if (localStorage.getItem('cart') !== null) {
    listaProizvoda = JSON.parse(localStorage.getItem('cart'));

    for (let i = 0; i < listaProizvoda.length; i++) {
      $.each(vina, function (key, value) {
        if ($(value).attr('data-id') == listaProizvoda[i].id) {
          $(value)[0].children[1].children[2].innerHTML = 'U korpi';

          $(value).children()[1].children[2].classList.value =
            'btn cart disabled';
        }
      });
    }
  }
});
