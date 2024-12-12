const add = document.querySelector(".addtask");
const tasks = document.querySelector(".tasks");
const pictures = ["pic-1", "pic-2", "pic-3", "pic-4", "pic-5", "pic-6"];
let taskIdentifiers = [];
let taskList = [];
let dailySummary = {};

add.addEventListener("click", () => {
          let name = document.querySelector("#eventName").value.trim();
          let place = document.querySelector("#eventLocation").value.trim();
          let desc = document.querySelector("#eventDescription").value.trim();

          if (!name || name.length > 20) {
                    alert("A név nem lehet üres, és legfeljebb 20 karakter hosszú lehet.");
                    return;
          }
          if (!place || place.length > 15) {
                    alert("A helyszín nem lehet üres, és legfeljebb 15 karakter hosszú lehet.");
                    return;
          }
          if (!desc || desc.length > 50) {
                    alert("A leírás nem lehet üres, és legfeljebb 50 karakter hosszú lehet.");
                    return;
          }


          let taskIdentifier = `${name.toLowerCase()}-${place.toLowerCase()}`;

          if (taskIdentifiers.includes(taskIdentifier)) {
                    alert("Ez a feladat már létezik!");
          } else {
                    taskIdentifiers.push(taskIdentifier);
                    let task = new Task(name, place, desc, tasks);
                    taskList.push(task);
          }
});
console.log(new Date().toISOString());
class Task {
          #name;
          #place;
          #desc;
          #container;
          #element;
          #picture;
          #textdiv;
          #time;
          #timeP;
          #intervall;
          constructor(name, place, desc, container) {
                    this.#name = name;
                    this.#place = place;
                    this.#desc = desc;
                    this.#container = container;
                    this.#time = 0;
                    this.innit();
          }
          getTime() {
                    return this.#time;
          }
          getPlace() {
                    return this.#place;
          }
          getName() {
                    return this.#name;
          }
          innit() {
                    this.#element = document.createElement("div");
                    let rnpicture = `url(img/${pictures[Math.floor(Math.random() * pictures.length)]}.jpg)`;
                    this.#element.classList.add("col-lg-4", "text-center", "task");
                    this.#container.appendChild(this.#element);
                    this.#picture = document.createElement("div");
                    this.#picture.classList.add("picture");
                    this.#picture.style.backgroundImage = rnpicture;
                    this.#element.appendChild(this.#picture);
                    this.#textdiv = document.createElement("div");
                    this.#element.appendChild(this.#textdiv);
                    this.#textdiv.classList.add("text-center", "w-100");
                    let h3 = document.createElement("h3");
                    h3.innerHTML = this.#name;
                    this.#textdiv.appendChild(h3);
                    let place = document.createElement("p");
                    place.innerHTML = this.#place;
                    this.#textdiv.appendChild(place);
                    let desc = document.createElement("span");
                    desc.innerHTML = this.#desc;
                    this.#textdiv.appendChild(desc);
                    this.#timeP = document.createElement("p");
                    this.#timeP.innerHTML = this.calculateTime();
                    this.#textdiv.appendChild(this.#timeP);
                    this.startTime();
                    let buttondiv = document.createElement("div");
                    buttondiv.classList.add("buttons", "d-flex", "justify-content-evenly");
                    let startbutton = document.createElement("button");
                    startbutton.classList.add("btn", "btn-success");
                    this.#textdiv.appendChild(buttondiv);
                    buttondiv.appendChild(startbutton);
                    let stopbutton = document.createElement("button");
                    stopbutton.classList.add("btn", "btn-danger");
                    buttondiv.appendChild(stopbutton);
                    startbutton.textContent = "Indítás";
                    stopbutton.textContent = "Megállítás";
                    startbutton.addEventListener("click", this.startTime.bind(this));
                    stopbutton.addEventListener("click", this.stopTime.bind(this));
                    this.#timeP.style.fontWeight = 700
          }
          calculateTime() {
                    if (Math.floor(this.#time / 60) < 10 && this.#time % 60 < 10) {
                              return `0${Math.floor(this.#time / 60)}:0${this.#time % 60}`;
                    } else if (Math.floor(this.#time / 60) < 10) {
                              return `0${Math.floor(this.#time / 60)}:${this.#time % 60}`;
                    } else {
                              return `${Math.floor(this.#time / 60)}:${this.#time % 60}`;
                    }
          }
          updateSummary() {
                    let today = new Date().toISOString().split('T')[0];

                    if (!dailySummary[today]) {
                              dailySummary[today] = {};
                    }
                    if (!dailySummary[today][this.#name]) {
                              dailySummary[today][this.#name] = 0;
                    }
                    dailySummary[today][this.#name] = taskList
                              .filter(task => task.getName() === this.#name)
                              .reduce((total, task) => total + task.getTime(), 0);
                    this.renderSummary();
          }
          renderSummary() {
                    let summaryElement = document.querySelector(".daily-summary");

                    if (!summaryElement) {
                              summaryElement = document.createElement("div");
                              summaryElement.classList.add("daily-summary");
                              this.#container.appendChild(summaryElement);
                    }
                    let today = new Date().toISOString().split('T')[0];
                    summaryElement.innerHTML = `<h4>${today} összesítés:</h4>`;

                    Object.keys(dailySummary[today]).forEach((taskName) => {
                              let time = dailySummary[today][taskName];
                              let minutes = Math.floor(time / 60);
                              let seconds = time % 60;
                              let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
                              let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
                              summaryElement.innerHTML += `<p class="final">${taskName}: ${formattedMinutes}:${formattedSeconds}</p>`;
                    });
          }
          startTime() {
                    if (this.#intervall) return;
                    this.#intervall = setInterval(() => {
                              this.#time += 1;
                              this.#timeP.innerHTML = this.calculateTime();
                              this.updateSummary();
                    }, 1000);
          }
          stopTime() {
                    clearInterval(this.#intervall);
                    this.#intervall = null;
                    this.updateSummary();
          }
}
