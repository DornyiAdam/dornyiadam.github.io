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
    var select = document.querySelector("select").value;
    var radio_s = document.querySelector("#validationFormCheck2:checked");
    var radio_m = document.querySelector("#validationFormCheck3:checked");
    var radio_l = document.querySelector("#validationFormCheck4:checked");
    var calculated = document.querySelector(".calculated h3");
    var selectedValue = parseInt(select);
    var choosenwood;
    if (selectedValue !== "" && !isNaN(selectedValue)) {
        choosenwood = selectedValue * 1500;
    } else {
        choosenwood = 0;
    }
    var size;
    if (radio_s) {
        size = 1.6;
    }
    else if (radio_m) {
        size = 2.3;
    }
    else if (radio_l) {
        size = 2.7;
    }
    else {
        size = 0;
    }

    var price = (Math.floor(choosenwood * size));
    var element = document.querySelector(".calculated");
    if (0 < price) {
        element.style.display = "flex";
        calculated.innerHTML = "Kalkulált összeg: " + price + "Ft";
    }
    
    if (size == 0) {
        alert("Kérlek, válaszd ki a madáretető méretét!");
    }
    else if (choosenwood == 0) {
        alert("Kérlek, válaszd ki a faanyag típusát!");
    }
    validateForm(event);

}

