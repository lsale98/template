function showPrice(){let t=0,e=[];null!==localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))).forEach(e=>{t+=parseInt(e.price)*parseInt(e.qty)});let a=`<h4>Ukupno: ${t},00 RSD</h4><a onclick="emptyCart()" class="btn empty"><i class="fas fa-trash mr-2"></i>Isprazni korpu</a>`;$("#price").append(a)}function countItems(){let t=[];null!==localStorage.getItem("cart")?(t=JSON.parse(localStorage.getItem("cart")),$("#cart #items")[0].textContent=t.length):$("#cart #items")[0].textContent=0}function emptyCart(){null!==localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")).length>0&&(localStorage.removeItem("cart"),$("#price")[0].innerHTML="",displayCart(),showPrice(),countItems())}function displayCart(){let t="";if(null!==localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")).length>0){const e=localStorage.getItem("cart");JSON.parse(e).forEach(e=>{t=`\n       <tr>\n            <td>${e.name}</td>\n            <td>${e.price},00</td>\n             <td><a data-id=${e.id} onclick="removeItem()" class="btn removeSingleItem">Izbriši</a></td>\n          </tr>\n    `,$("#cartItems .table tbody").append(t)})}else{$("#cartItems .table").css("display","none");let t="\n       <h1>Vaša korpa je prazna!</h1>\n    ";$("#cartItems").append(t)}}function removeItem(){console.log(event.target.dataset.id);let t=event.target.dataset.id;if(null!==localStorage.getItem("cart")){let e=JSON.parse(localStorage.getItem("cart")).filter(e=>e.id!==t);localStorage.setItem("cart",JSON.stringify(e)),window.location.reload()}}$(document).ready(function(){displayCart(),countItems(),showPrice()});