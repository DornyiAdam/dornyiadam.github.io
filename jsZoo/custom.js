function changeClass() {
    var footer = document.querySelector(".changeFooter");
    if (window.innerWidth < 993) {
        footer.classList.remove("fixed-bottom")
        footer.classList.add("sticky-lg-bottom")
    }
    else {
        footer.classList.remove("sticky-lg-bottom")
        footer.classList.add("fixed-bottom")
    }
}
changeClass();
window.addEventListener('resize', changeClass);

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
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

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        alert('Sikeres fizetés!');
    }

    form.classList.add('was-validated');
}
function stayOverflow() {
  document.getElementById("overflow").style.overflowY = "scroll";
  document.getElementById("overflow").style.padding = 0;
}
stayOverflow()
var max = 99
var select = document.querySelector("select");
for (var i = 0; i <= max; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    select.appendChild(option);
}

document.getElementById("ticketSelect").addEventListener("change", function() {
  calculateTicketPrice(this);
});

function calculateTicketPrice(select) {
  var selectedValue = select.value;
  var calculatedPrice = selectedValue * 3000;
  var checkOut = document.querySelector(".checkOut");
  checkOut.innerHTML = 'Végösszeg: ' + calculatedPrice.toFixed(2) + " Ft";
}
