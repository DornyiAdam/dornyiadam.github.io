class Gyumolcs {
          #x;
          #y;
          #isApple;
          #speed;
          #container;
          #element;
          #fallInterval;
          constructor(x, y, speed, container) {
                    this.setX(x)
                    this.setY(y)
                    this.setSpeed(speed)
                    this.setContainer(container)
          }
          setX(x) {
                    this.#x = x;
          }
          setY(y) {
                    this.#y = y;
          }
          setSpeed(speed) {
                    this.#speed = speed;
          }
          setContainer(container) {
                    this.#container = document.querySelector(container)
          }
          createFruit() {
                    this.#element = document.createElement("div");
                    this.#isApple = parseInt(Math.random() * 2);
                    this.#element.classList.add(this.#isApple == 0 ? "apple" : "banana")

                    this.#element.style.left = this.#x + "px"
                    this.#element.style.top = this.#y + "px"

                    this.#container.appendChild(this.#element)
                    this.#element.addEventListener('click', ()=> this.collect())
          }

          fall() {
                    this.#fallInterval = setInterval(() => {
                         this.#y += this.speed;     
                         this.#element.style.top = this.#y + "px"
                         if(this.#y > this.#container.offsetHeight) {
                              this.remove();
                         }
                    }, 20);
          }
          collect() {
                    alert("Elkaptál!")
          }
          remove() {
                    clearInterval(this.#fallInterval);
                    this.#element.remove();
          }



}