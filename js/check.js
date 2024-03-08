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

        var imgElement = document.createElement('img');
        imgElement.src = item.image;
        imgElement.alt = item.nev;
        listItem.appendChild(imgElement);

        var textContent = document.createElement('span');
        textContent.textContent = ' ' + item.nev + ': ' + Number(item.price).toLocaleString() + " Ft";
        listItem.appendChild(textContent);
        
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