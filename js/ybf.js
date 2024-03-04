
var counter = parseInt(localStorage.getItem("cartCounter")) || 0;

function addToCart(nev, price, image) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var itemId = 'item_' + Date.now();
  cart.push({ id: itemId, nev: nev, price: price, image: image });
  localStorage.setItem('cart', JSON.stringify(cart));
  counter++;
  updateCounter();
  const toastLiveExample = document.getElementById('liveToast')
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastBootstrap.show()
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



console.log("asd");



window.addEventListener('load', function () {
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
  function validateForm(event) {
    var form = document.querySelector('.needs-validation');
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log('Sikeres generálás!');
      element.style.display = "flex";
  calculated.innerHTML = "Kalkulált összeg: " + price + "Ft"
    }
  
    form.classList.add('was-validated');
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

