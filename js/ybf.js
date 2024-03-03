var counter = parseInt(localStorage.getItem("cartCounter")) || 0;

function addToCart(nev, price, image) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var itemId = 'item_' + Date.now();
  cart.push({ id: itemId, nev: nev, price: price, image: image });
  localStorage.setItem('cart', JSON.stringify(cart));
  counter++;
  updateCounter();
  checkOut();
}

function load() {
  updateCounter();
}

function updateCounter() {
  console.log('updateCounter függvény meghívva');
  var checkOut = document.querySelector(".cartItemCount");
  var mobileCheckOut = document.querySelector(".mobile-cart-items")
  mobileCheckOut.innerHTML = counter;
  checkOut.innerHTML = counter;
  localStorage.setItem("cartCounter", counter);
  console.log('Counter értéke:', counter);
}

function checkOut() {
  var cartItemsElement = document.getElementById('cart-items');
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var net = document.querySelector(".netTotal")
  var vat = document.querySelector(".vat")
  var total = document.querySelector(".total")
  var totalPrice = 0;

  cartItemsElement.innerHTML = '';

  cart.forEach(function (item) {
    totalPrice += parseInt(item.price);
    var listItem = document.createElement('li');

    var imgElement = document.createElement('img');
    imgElement.src = item.image;
    imgElement.alt = item.nev;
    listItem.appendChild(imgElement);

    var textContent = document.createElement('span');
    textContent.textContent = ' ' + item.nev + ': ' + item.price + " Ft";
    listItem.appendChild(textContent);

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Eltávolítás';
    removeButton.addEventListener('click', function () {
      removeItem(item.id);
    });
    listItem.appendChild(removeButton);
    removeButton.classList.add('remove-button');

    cartItemsElement.appendChild(listItem);
  });
  vat.innerHTML = Math.floor(totalPrice * 0.27) + "Ft";
  net.innerHTML = Math.floor(totalPrice * 0.73) + "Ft";
  total.innerHTML = totalPrice + " Ft";
}

function removeItem(itemId) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var updatedCart = cart.filter(function (item) {
    return item.id !== itemId;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  counter--;
  updateCounter();
  checkOut();
}

function clearCart() {
  localStorage.removeItem('cart');
  counter = 0;
  updateCounter();
  checkOut();
}

console.log("asd");

document.addEventListener('DOMContentLoaded', function () {
  console.log('Az oldal betöltődött!');
  checkOut();
  load();
  updateCounter();
});

window.addEventListener('load', function() { 
  updateCounter();
})

var imgElement = document.createElement('img');
imgElement.src = 'images/birdfeeder1.webp';
imgElement.onload = function () {
  console.log('A kép sikeresen betöltődött.');
};
imgElement.onerror = function () {
  console.error('Hiba a kép betöltésekor.');
};
function calculatePrice() {
  var calculated = document.querySelector(".calculated h3");
  var choosenwood = parseFloat(document.querySelector("select").value) || 0;
  var size = document.querySelector("#validationFormCheck2:checked") ? 1.5 : (document.querySelector("#validationFormCheck3:checked") ? 2 : (document.querySelector("#validationFormCheck4:checked") ? 3 : 0));
  var price = (Math.floor(choosenwood * size));
  var element = document.querySelector(".calculated");
  if (size == 0) {
    alert("Kérlek, válaszd ki a madáretető méretét!");
  }
  else if (choosenwood == 0) {
    alert("Kérlek, válaszd ki a faanyag típusát!");
  }
  else {
    element.style.display = "flex";
    calculated.innerHTML = "Kalkulált összeg: " + price + "Ft";
  }
  validateForm(event);
  const myModal = new bootstrap.Modal(document.getElementById('myModal'))

}
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()