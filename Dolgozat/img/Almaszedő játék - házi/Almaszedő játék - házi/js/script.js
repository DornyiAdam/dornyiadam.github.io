var gameArea = document.querySelector("section");
var gameInterval = null;
var pontszam = 0;
var lives = 3;
let gameOver = false;
let gyumolcsok = [];
const pontSpan = document.querySelector(".pont span");
const livesSpan = document.querySelector(".eletek span");

function updateScore(pont) {
    pontszam += pont;
    pontSpan.innerHTML = pontszam;

    if (pontszam >= 10) {
        alert("Gratulálunk, nyertél!");
        stop();
    }
}

function updateLives() {
    livesSpan.innerHTML = lives;
    if (lives <= 0 && !gameOver) {
        alert("Elfogytak az életeid! Game over!");
        stop();
    }
}

function clearAllFruits() {
    gyumolcsok.forEach(fruit => fruit.remove(true));
    gyumolcsok = [];
}

function stop() {
    clearInterval(gameInterval);
    gameInterval = null;
    gameOver = true;
    clearAllFruits();
    lives = 3;
    updateLives();
    pontszam = 0;
    updateScore(0);
}

document.querySelector(".start").addEventListener('click', () => {
    if (!gameInterval) {
        pontszam = 0;
        lives = 3;
        gameOver = false;
        updateScore(0);
        updateLives();
        clearAllFruits();

        gameInterval = setInterval(() => {
            var x = Math.random() * (gameArea.offsetWidth - 30);
            var gy = new Gyumolcs(x, 0, 1 + Math.random() * 2, 'section');
            gy.fall();
            gyumolcsok.push(gy);
        }, 1000);
    }
});

document.querySelector(".stop").addEventListener('click', () => {
    stop();
});

const livesContainer = document.getElementById("lives-container");

function displayLives() {
    livesContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const life = document.createElement("i");
        life.classList.add("bi", "bi-heart-fill", "life");
        livesContainer.appendChild(life);
    }
}


function updateLives() {
    displayLives();
    if (lives <= 0 && !gameOver) {
        alert("Elfogytak az életeid! Game over!");
        stop();
    }
}