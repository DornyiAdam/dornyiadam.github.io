const payModal = new bootstrap.Modal(document.getElementById('payModal'));
const otodik = new bootstrap.Modal(document.getElementById('systemInfo'));

function checkOut() {
    var cartItemsElement = document.getElementById('cart-items');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var net = document.querySelector(".netTotal")
    var vat = document.querySelector(".vat")
    var total = document.querySelector(".total")
    var totalPrice = 0;
    var modal_price = document.querySelector(".pay-ammount")



    cartItemsElement.innerHTML = '';

    cart.forEach(function (item) {
        totalPrice += parseInt(item.price);
        var listItem = document.createElement('li');
        var textContent = document.createElement('span');
        textContent.innerHTML = '<br> ' + item.nev + "<br>";
        textContent.classList.add("title-display")
        listItem.appendChild(textContent);
        var imgElement = document.createElement('img');
        imgElement.src = item.image;
        imgElement.alt = item.nev;
        listItem.appendChild(imgElement);
        var priceElement = document.createElement('span');
        priceElement.innerHTML = "<br>" + Number(item.price).toLocaleString() + " Ft" + "<br>"
        priceElement.classList.add("price-display")
        listItem.appendChild(priceElement)
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '<span class="red">✕</span> Eltávolítás';
        removeButton.addEventListener('click', function () {
            removeItem(item.id);
        });
        listItem.appendChild(removeButton);
        removeButton.classList.add('remove-button');

        cartItemsElement.appendChild(listItem);
    });
    vat.innerHTML = Math.floor(totalPrice * 0.27).toLocaleString() + "Ft";
    net.innerHTML = Math.floor(totalPrice * 0.73).toLocaleString() + "Ft";
    total.innerHTML = totalPrice.toLocaleString() + " Ft";
    modal_price.innerHTML = "Fizetendő összeg: " + " " + totalPrice.toLocaleString() + " Ft"
    var storedPrice = localStorage.setItem("storedPrice", totalPrice)
    payButton();
}

function payButton() {
    var storedPrice = localStorage.getItem("storedPrice") || 0;
    var payButton = document.querySelector(".payButton");
    var placeholder = document.querySelector(".cart-display");
    var clearButton = document.querySelector(".clearButton");
    var totalCheckOut = document.querySelector(".totalCheckOut")
    if (parseInt(storedPrice) > 0) {
        payButton.style.display = "inline-block";
        clearButton.style.display = "inline-block";
        placeholder.style.display = "none";
        totalCheckOut.style.dispaly = "block";
    }
    else {
        payButton.style.display = "none";
        placeholder.style.display = "block";
        clearButton.style.display = "none";
        totalCheckOut.style.display = "none";

    }

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
    payButton();
}

function clearCart() {
    localStorage.removeItem('cart');
    counter = 0;
    updateCounter();
    checkOut();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Az oldal betöltődött!');
    checkOut();
    load();
    updateCounter();
    payButton();
});

function calculatePrice(event) {
    var calculated = document.querySelector(".calculated");
    var ar = document.querySelector(".ar")
    var choosenwood = parseFloat(document.querySelector("select").value) || 0;
    var size2 = parseInt(document.querySelector(".size").value)
    var price = Math.floor(choosenwood * size2);
    // Calculate the price before validating
    validateForm(price)
    calculated.style.dispaly = "block"
    ar.innerHTML =  " Kalkulált összeg " +price + "Ft"
}

function validateForm(price) {
    var form = document.querySelector('.paymentForm');
    var calculated = document.querySelector(".calculated");
    var ar = document.querySelector(".ar");

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        console.log('Sikeres generálás!');
        ar.innerHTML =  " Kalkulált összeg " +price + "Ft";
        calculated.style.display = "flex";
    }

    form.classList.add('was-validated');
}


function showModal(event) {

    var form = document.querySelector('.payForm');
    var calculated = document.querySelector(".calculated");
    var ar = document.querySelector(".ar");

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        payModal.hide();
        console.log("Fasz")
        otodik.show();
        document.body.classList.remove('modal-open');
        clearCart();

        
    }

    form.classList.add('was-validated');
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
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