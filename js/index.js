function show() {
          var h1 = document.querySelector("h1")
          var h2 = document.querySelector("h2")
          var button = document.querySelector(".gomb")
          var contact = document.querySelector(".contact")
          var address = document.querySelector(".email")
          h1.classList.add("hide")
          h2.classList.add("hide")
          contact.classList.remove("hide")
          button.classList.toggle("hide")
          address.classList.toggle("hide")
          address.classList.add("email")

}