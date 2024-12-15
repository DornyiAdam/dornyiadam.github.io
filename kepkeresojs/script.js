var time = 60
var idozito = null;
var container = document.querySelector(".game-area")
var elemek = []
var megtalalt = 0;
var opciok = [".sapka", ".csillag", ".bomba", ".ajandek", ".hopehely"]
if (!idozito) {
    for (var i = 0; i < opciok.length; i++) {
        elemek.push(new Elem(container, i))
    }
    idozito = setInterval(() => {

        if (time > 0) {
            var p = document.querySelector(".time")
            time = time - 1
            time > 60 ? (p.innerHTML = `${Math.floor(time / 60)}:${Math.floor(time % 60)}`) : p.innerHTML = Math.floor(time % 60) > 9 ? `00:${Math.floor(time % 60)}` : `00:0${Math.floor(time % 60)}`

        }
        else {
            document.querySelector(".objects").classList.add("d-none");
            clearInterval(idozito)
            for (var i = 0; i < opciok.length; i++) {
                document.querySelector(`${opciok[i]}`).classList.add("d-none")
            }
            document.querySelector(".win").innerHTML = `<strong>Vesztettél!</strong>`
            clearInterval(idozito)
        }
    }, 1000);
}
function countElem() {
    megtalalt++;
    if (time > 0 && megtalalt == 5) {
        alert(`Ennyi idő alatt találtad meg őket: ${time}mp`)
        clearInterval(idozito)
        document.querySelector(".objects").classList.add("d-none");
        var win = document.querySelector(".win")
        win.style.color = "green"
        win.innerHTML = `<strong>Nyertél!</strong>`
    }
}


