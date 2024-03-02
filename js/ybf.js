



var counter = parseInt(localStorage.getItem("cartCounter")) || 0;
var price = parseInt(localStorage.getItem("priceCounter")) || 0;
function addToCart(product) {
  counter++;
  price += 0
  localStorage.setItem("cartCounter", counter);
  var checkOut = document.querySelector(".cartItemCount");
  var mobileCheckOut = document.querySelector(".mobile-cart-items")
  checkOut.innerHTML = " " + counter;
  mobileCheckOut.innerHTML = " " + counter;
  checkOut.style.padding = "4px 8px 8px 8px";
  console.log(counter)
  localStorage.setItem("priceCounter", price);
  
}
function addToCart375400(product) {
  addToCart(product)
  price += 375400
  localStorage.setItem("priceCounter", price);
}
function addToCart7500(product) {
  addToCart(product)
  price += 7500
  localStorage.setItem("priceCounter", price);
}
function addToCart5000(product) {
  addToCart(product)
  price += 5000
  localStorage.setItem("priceCounter", price);
}
function addToCart2000(product) {
  addToCart(product)
  price += 2000
  localStorage.setItem("priceCounter", price);
}
function addToCart10000(product) {
  addToCart()
  price += 10000;
  localStorage.setItem("priceCounter", price);
}
function clearCart() {
  var checkOut = document.querySelector(".cartItemCount");
  var mobileCheckOut = document.querySelector(".mobile-cart-items")
  checkOut.innerHTML = 0
  mobileCheckOut.innerHTML = 0
  counter = 0;
  price = 0;
  localStorage.setItem("cartCounter", counter);
  localStorage.setItem("priceCounter", price);
  calculateCheckOut()
  
}
window.onload = function reload() {
  var checkOut = document.querySelector(".cartItemCount");
  var mobileCheckOut = document.querySelector(".mobile-cart-items");
  checkOut.innerHTML = " " + counter;
  mobileCheckOut.innerHTML = " " + counter;
  checkOut.style.padding = "4px 8px 8px 8px";
  
  calculateCheckOut()
};

function calculateCheckOut() {
  sub = document.querySelector("#subtotal");
  net = document.querySelector("#netTotal");
  total = document.querySelector("#total");
  vat = document.querySelector("#vat");
  total.innerHTML = price + "Ft"
  net.innerHTML = price*0.73 + "Ft"
  vat.innerHTML = Math.floor(price*0.27) + "Ft"

}




var productsData = [
  {
    name: "Lorem model 2500",
    image: "images/birdfeeder1.webp",
    discount: 21,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 9600,
    newPrice: 7500
  },
  {
    name: "Lorem model 2800 SUPER",
    image: "images/birdfeeder2.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2700 SUPER",
    image: "images/birdfeeder3.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2600",
    image: "images/birdfeeder4.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2500",
    image: "images/birdfeeder5.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2400",
    image: "images/birdfeeder6.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2100",
    image: "images/birdfeeder7.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2400 SUPER",
    image: "images/birdfeeder8.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2300 SUPER",
    image: "images/birdfeeder9.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2000",
    image: "images/birdfeeder10.webp",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2000 SUPER",
    image: "images/birdfeeder6.jpg",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  },
  {
    name: "Lorem model 2200 SUPER",
    image: "images/birdfeeder17.jpg",
    discount: 25,
    capacity: 3,
    size: "S (5''x4'')",
    oldPrice: 10000,
    newPrice: 7500
  }
];
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

function validateForm(event) {
  var form = document.querySelector('.needs-validation');
  var select = document.querySelector("select").value

  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add('was-validated');
}




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
  //myModal.show();
}

/*Ezt majd később hozzáadom, hogy jó legye a modal: 
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  Show a second modal and hide this one with the button below.
</div>
<div class="modal-footer">
  <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
</div>
</div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  Hide this modal and show the first with the button below.
</div>
<div class="modal-footer">
  <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
</div>
</div>
</div>*/
