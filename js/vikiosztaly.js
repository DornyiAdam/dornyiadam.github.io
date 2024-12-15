class CashierGame {
          constructor(images, devDelay = 200) {
                    this.images = { ...images }; // Az összes kép másolatát tároljuk
                    this.devDelay = devDelay;
                    this.score = 0;
                    this.currentKey = null;
                    this.cheatTimeout = null;
                    this.starterTime = 180
                    this.time = this.starterTime
                    this.updateProgressBar(0);
                    // DOM elemek inicializálása
                    this.timeElem = document.querySelector(".time");
                    this.modal = new bootstrap.Modal(document.getElementById('exampleModal'))
                    this.modalHeader = document.querySelector('#exampleModal .modal-header');
                    this.modalBody = document.querySelector('#exampleModal .modal-body');
                    this.modalFooter = document.querySelector('#exampleModal .modal-footer');
                    this.imgElement = document.querySelector("img");
                    this.cheatElem = document.querySelector(".cheat");
                    this.scoreElem = document.querySelector(".score");
                    this.inputElem = document.querySelector("input");
                    this.feedbackElem = document.getElementById("feedback");
                    this.feedbackIcon = document.getElementById("feedbackIcon");
                    this.button = document.querySelector(".enter");

                    // Inicializálás
                    this.init();
          }

          init() {
                    this.updateImage();
                    this.updateScore();
                    this.bindEvents();
                    const restartButton = document.getElementById('restartButton');
                    if (restartButton) {
                              restartButton.addEventListener('click', () => this.restartGame());
                    }
                    this.startTimer()
          }

          // Eseménykezelők
          bindEvents() {
                    if (this.imgElement) {
                              this.imgElement.addEventListener("error", () => this.next());
                    }
                    if (this.button) {
                              this.button.addEventListener("click", () => this.handleAnswer());
                    }
                    if (this.inputElem) {
                              this.inputElem.addEventListener("keypress", (event) => {
                                        if (event.key === "Enter") {
                                                  event.preventDefault();
                                                  this.handleAnswer();
                                        }
                              });
                    }
          }

          // Véletlenszerű kép kulcs kiválasztása
          getRandomKey() {
                    const keys = Object.keys(this.images);
                    return keys[Math.floor(Math.random() * keys.length)];
          }

          // Pontszám frissítése a DOM-ban
          updateScore() {
                    if (this.scoreElem) this.scoreElem.textContent = this.score;
                    this.updateProgressBar(); // Frissítjük a progress bart a pontszám frissítésekor
          }

          // Következő kép frissítése
          updateImage() {
                    const keys = Object.keys(this.images);
                    if (keys.length) {
                              this.currentKey = this.getRandomKey();
                              this.imgElement.src = `vikiwebp/${this.images[this.currentKey]}`;
                              this.cheatElem.style.color = "#f44336";
                              clearTimeout(this.cheatTimeout);
                              this.cheatTimeout = setTimeout(() => this.showCheat(), this.devDelay);
                    } else {
                              this.endGame();
                    }
          }

          // Következő kép betöltése és az aktuális kép törlése
          next() {
                    delete this.images[this.currentKey];
                    clearTimeout(this.cheatTimeout);

                    const keysRemaining = Object.keys(this.images).length; // Megmaradt képek száma
                    const totalImages = Object.keys(this.images).length + this.score; // Összes kép, beleértve az eddigi találatokat

                    // Frissítjük a progress bart
                    this.updateProgressBar(totalImages - keysRemaining, totalImages); // Kép frissítés
                    keysRemaining ? this.updateImage() : this.endGame();
          }
          updateProgressBar(currentImages, totalImages) {
                    const progressBar = document.querySelector(".progress-bar");
                    const progressText = document.querySelector(".progress-text");

                    if (totalImages > 0) {
                              const percentage = (currentImages / totalImages) * 100; // Százalék számítása
                              if (progressBar) {
                                        progressBar.style.width = `${percentage}%`; // A progress bar szélessége
                              }
                              if (progressText) {
                                        progressText.textContent = `${Math.round(percentage)}%`; // A százalékos érték beállítása
                              }
                    } else {
                              // Ha nincs érvényes totalImages, nullázzuk a progress bart
                              if (progressBar) {
                                        progressBar.style.width = `0%`; // Nullázza a progress bart
                              }
                              if (progressText) {
                                        progressText.textContent = `0%`; // Nullázza a progress szöveget
                              }
                    }
          }

          // Válasz ellenőrzése és pontszám frissítése
          handleAnswer() {
                    const isCorrect = this.validateAnswer();
                    if (isCorrect) {
                              this.score++;
                              this.updateScore();
                              this.next();
                    }
                    this.inputElem.value = ""; // Beviteli mező törlése
                    this.showFeedback(isCorrect);
          }

          // Válasz ellenőrzése
          validateAnswer() {
                    return this.currentKey == this.inputElem.value;
          }

          // Visszajelzés megjelenítése
          showFeedback(isCorrect) {
                    if (this.feedbackElem && this.feedbackIcon) {
                              this.feedbackIcon.textContent = isCorrect ? "✅" : "❎";
                              this.feedbackElem.classList.remove("hidden");
                              setTimeout(() => this.feedbackElem.classList.add("hidden"), 500);
                    }
          }

          // Cheat megjelenítése, ha engedélyezett
          showCheat() {
                    this.cheatElem.style.color = "#ffffff";
                    this.cheatElem.textContent = this.currentKey;
          }

          // Játék vége
          endGame() {
                    console.log("Nincs több kép vagy lejárt az idő.");
                    clearInterval(this.timerInterval); // Az időzítő leállítása
                    if (this.imgElement) this.imgElement.style.display = "none";
                    if (this.cheatElem) this.cheatElem.style.display = "none";

                    // Modal tartalmának frissítése
                    this.updateModalContent("Játék vége", `Pontszámod: ${this.score}`);
                    this.showModal(); // Modal megjelenítése
                    this.updateProgressBar(0); // Visszaállítjuk a progress bart 0%-ra
          }

          showModal() {
                    this.modal.show();
          }

          hideModal() {
                    this.modal.hide();
          }
          updateModalContent(title, body) {
                    if (this.modalHeader) {
                              this.modalHeader.querySelector('.modal-title').textContent = title; // Cím frissítése
                    }
                    if (this.modalBody) {
                              this.modalBody.textContent = body; // Törzs frissítése
                    }
          }
          restartGame() {
                    // Játék állapotának visszaállítása
                    this.score = 0;
                    this.images = { ...kepek }; // Visszaállítjuk az összes képet
                    this.currentKey = null;
                    this.cheatTimeout = null;
                    this.time = this.starterTime;
                    if (this.timeElem) this.timeElem.textContent = `Hátralévő idő: ${this.time}`;

                    // DOM frissítések
                    this.updateScore();
                    this.updateImage(); // Új kép betöltése
                    this.feedbackElem.classList.add("hidden"); // Visszajelzés eltüntetése

                    // Játékfelület újra megjelenítése
                    if (this.imgElement) this.imgElement.style.display = "block"; // Játékfelület megjelenítése
                    if (this.cheatElem) this.cheatElem.style.display = "block"; // Cheat elem megjelenítése

                    // Modal tartalmának frissítése (opcionális)
                    this.updateModalContent("Újraindítás", "A játék újraindult!");
                    this.modal.show(); // Modal megjelenítése

                    // Indítsd el az időzítőt
                    this.startTimer();
          }

          decreaseTime() {
                    this.time--;
                    if (this.time <= 0) {
                              this.endGame();
                    } else {
                              if (this.timeElem) {
                                        this.timeElem.textContent = `Hátralévő idő: ${this.time}`;
                              }
                    }
          }
          startTimer() {
                    this.timerInterval = setInterval(() => {
                              this.decreaseTime();
                    }, 1000); // Minden másodpercben csökkenti az időt
          }





}



