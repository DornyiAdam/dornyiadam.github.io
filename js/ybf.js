
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
