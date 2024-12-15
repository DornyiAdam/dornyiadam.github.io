const textarea = document.querySelector("textarea");
const container = document.querySelector(".container");
const button = document.querySelector(".btn-dark");
textarea.addEventListener('keydown', function (event) {
    // Enter billentyű lenyomása esetén
    if (event.key === 'Enter') {
        event.preventDefault();  // Megakadályozza, hogy új sorba lépjen
        container.innerHTML = this.value;
        textarea.parentElement.style.display = "none";

    }
});
button.addEventListener("click", () => {
    container.innerHTML = ""
    textarea.value = "";
    textarea.parentElement.style.display = "block";
})