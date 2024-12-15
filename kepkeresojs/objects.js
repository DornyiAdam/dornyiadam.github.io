
class Elem {
    #element;
    #container;
    #classID;
    #index;
    setElement(newElement) {
        this.#element = newElement;
    }

    // Setter for #container
    setContainer(newContainer) {
        this.#container = newContainer;
    }

    // Setter for #classID
    setClassID(newClassID) {
        this.#classID = newClassID;
    }

    // Setter for #index
    setIndex(newIndex) {
        this.#index = newIndex;
    }
    constructor(container,index) {
        this.#container = container;
        this.#index = index;
        this.generateElem(index)
    }
    generateElem(index) {
        var classes = ["sapka","csillag","bomba","ajandek","hopehely"]
        var images = ["obj-1.png","obj-2.png","obj-3.png","obj-4.png","obj-5.png"]
        this.#element = document.createElement("img");
        this.#element.src = `kepkeresoimages/${images[index]}`;
        this.#container.appendChild(this.#element);
        this.#element.classList.add(classes[index])
        this.#element.addEventListener('click', ()=> this.collect(index))



    }
    collect(index) {
        var opciok = [".sapka",".csillag",".bomba",".ajandek",".hopehely"]
        document.querySelector(`.original_${index+1}`).classList.add("d-none");
        document.querySelector(opciok[index]).classList.add("d-none");
        countElem()
    }
 }