var rajzok = ["Féregírtó paradoxon", "Hibák felmerülése", "Követelményfejlesztés folyamata", "Követelmények dokumentumai", "Tesztpiramis", "A tesztelés alapvető folyamata", "Ütemterv", "Szoftverfejlesztési folyamat modellje"]


function generalas() {
          const MIN = 0       
          const MAX = rajzok.length
          var random = Math.floor(MIN + Math.random() * (MAX - MIN + 1))
          const span = document.querySelector(".outcome")
          if (rajzok.length > 0) {
                    span.innerHTML = rajzok[random]
                    rajzok.splice(random, 1)
                    console.log(rajzok)
                    console.log(random)
          }
          else {
                    span.innerHTML = "Szép munka!"
          }
}
