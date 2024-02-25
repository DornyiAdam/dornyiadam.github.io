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
var counter = 0
function fill() {
  counter++;
  final = document.querySelector(".final");
  final.innerHTML = counter;
  if (10 > counter) {
    final.style.left = "25px"
  }
  else {
    final.style.left = "18px"
  }
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
