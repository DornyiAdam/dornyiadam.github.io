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
        alert('Adatait fogadtuk!');
    }

    form.classList.add('was-validated');
}