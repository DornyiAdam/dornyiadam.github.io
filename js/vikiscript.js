
const kepek = {
    1: "img-1.webp",
    10: "img-10.webp"
}
var jatek = false
const kulcsok = Object.keys(kepek)
const images = Object.values(kepek)

var randomKulcs = kulcsok[Math.floor(Math.random() * kulcsok.length)];
document.querySelector("img").src = `vikiimages/${kepek[randomKulcs]}`

function next() {
    delete kepek[randomKulcs]
    const remainingKeys = Object.keys(kepek);
    if (remainingKeys.length > 0) {
        randomKulcs = remainingKeys[Math.floor(Math.random() * remainingKeys.length)];
        document.querySelector("img").src = `vikiimages/${kepek[randomKulcs]}`;
        
    } else {
        alert("Játék vége!");
    }

}

function showFeedback(isCorrect) {
    const feedback = document.getElementById("feedback");
    const feedbackIcon = document.getElementById("feedbackIcon");

    if (isCorrect) {
        feedbackIcon.textContent = "✔️";  // Pipa jel helyes válasz esetén
        feedback.style.backgroundColor = "green";
    } else {
        feedbackIcon.textContent = "❌";  // X jel helytelen válasz esetén
        feedback.style.backgroundColor = "red";
    }

    // Felugró ablak megjelenítése
    feedback.classList.remove("hidden");

    // Eltűnés beállítása 1,5 másodperc múlva
    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 1500);
}

// Hívás példa
document.querySelector("button").addEventListener("click", () => {
    if (randomKulcs == document.querySelector("input").value) {
        showFeedback(true);  // Helyes válasz
        next();
    } else {
        showFeedback(false); // Helytelen válasz
    }
});
