$(document).ready(function () {
  displayCart();
  countItems();
  showPrice();
});

function showPrice() {
  let ukupnaCena = 0;
  let listaCena = [];
  if (localStorage.getItem('cart') !== null) {
    listaCena = JSON.parse(localStorage.getItem('cart'));

    listaCena.forEach((product) => {
      ukupnaCena += parseInt(product.price) * parseInt(product.qty);
    });
  }

  let price = `<h4>Ukupno: ${ukupnaCena},00 RSD</h4><a onclick="emptyCart()" class="btn empty"><i class="fas fa-trash mr-2"></i>Isprazni korpu</a>`;
  $('#price').append(price);
}

function countItems() {
  let listaProizvoda = [];

  if (localStorage.getItem('cart') !== null) {
    listaProizvoda = JSON.parse(localStorage.getItem('cart'));
    $('#cart #items')[0].textContent = listaProizvoda.length;
  } else {
    $('#cart #items')[0].textContent = 0;
  }
}

function emptyCart() {
  if (
    localStorage.getItem('cart') !== null &&
    JSON.parse(localStorage.getItem('cart')).length > 0
  ) {
    localStorage.removeItem('cart');
    $('#price')[0].innerHTML = '';
    displayCart();
    showPrice();
    countItems();
  }
}

function displayCart() {
  let output = '';
  if (
    localStorage.getItem('cart') !== null &&
    JSON.parse(localStorage.getItem('cart')).length > 0
  ) {
    // Display cart
    const lsCart = localStorage.getItem('cart');
    JSON.parse(lsCart).forEach((product) => {
      // console.log(product);

      output = `
       <tr>
            <td>${product.name}</td>
            <td>${product.price},00</td>
             <td><a data-id=${product.id} onclick="removeItem()" class="btn removeSingleItem">Izbriši</a></td>
          </tr>
    `;

      $('#cartItems .table tbody').append(output);
    });
  } else {
    $('#cartItems .table').css('display', 'none');
    let output = `
       <h1>Vaša korpa je prazna!</h1>
    `;

    $('#cartItems').append(output);
  }
}

function removeItem() {
  console.log(event.target.dataset.id);
  let id = event.target.dataset.id;

  if (localStorage.getItem('cart') !== null) {
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let cart = currentCart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.reload();
  }
}
