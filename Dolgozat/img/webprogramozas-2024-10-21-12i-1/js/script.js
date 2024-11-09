var gameArea = document.querySelector("section");
var gameInterval = null;
var pontszam = 0;
const pontSpan = document.querySelector(".pont span");

function updateScore(pont){
    pontszam+=pont;
    pontSpan.innerHTML=pontszam;

    if(pontszam == 10){
        alert("Gratulálunk, nyertél!");
        stop();
    } else if(pontszam == -10){
        alert("Game over!");
        stop();
    }
}

function stop(){
    clearInterval(gameInterval);
    gameInterval = null;
    document.querySelectorAll(".apple").forEach(apple => apple.remove());
    document.querySelectorAll(".banana").forEach(banana => banana.remove());
}

document.querySelector(".start").addEventListener('click', () => {
    pontszam = 0;
    updateScore(0);

    if (!gameInterval) {
        gameInterval = setInterval(() => {
            var x = Math.random() * (gameArea.offsetWidth - 30);
            var gy = new Gyumolcs(x, 0, 1 + Math.random() * 2, 'section');
            gy.fall();
        }, 1000);
    }
})

document.querySelector(".stop").addEventListener('click', () => {
    stop();
})