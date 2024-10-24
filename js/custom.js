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

  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    console.log('Sikeres generálás!');
  }

  form.classList.add('was-validated');
}