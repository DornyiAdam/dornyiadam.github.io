const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX =  e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMoueUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMoueUp);
        }

        document.addEventListener("mousemove", handleMouseMove)
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    
    const updateScrollThumbPosition = () => {
         const scrollPosition = imageList.scrollLeft;
         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetwidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
     }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}
window.addEventListener("load", initSlider);

const initSlider2 = () => {
    const imageList2 = document.querySelector(".slide-wrapper-2 .image-list-2");
    const slideButtons2 = document.querySelectorAll(".slide-wrapper-2 .slide-button-2");
    const sliderScrollbar2 = document.querySelector(".container .slider-scrollbar-2");
    const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb-2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;

    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-2" ? -1 : 1;
            const scrollAmount = imageList2.clientWidth * direction;
            imageList2.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })

    scrollbarThumb2.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb2.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX =  e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft2;

            scrollbarThumb2.style.left = `${boundedPosition}px`;
            imageList2.scrollLeft = scrollPosition;
        }

        const handleMoueUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMoueUp);
        }

        document.addEventListener("mousemove", handleMouseMove)
    })

    const handleSlideButtons = () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "block";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    }
    
    const updateScrollThumbPosition = () => {
         const scrollPosition = imageList2.scrollLeft;
         const thumbPosition = (scrollPosition / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetwidth);
        scrollbarThumb2.style.left = `${thumbPosition}px`;
     }

    imageList2.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}
window.addEventListener("load", initSlider2);

const initSlider3 = () => {
    const imageList3 = document.querySelector(".slide-wrapper-3 .image-list-3");
    const slideButtons3 = document.querySelectorAll(".slide-wrapper-3 .slide-button-3");
    const sliderScrollbar3 = document.querySelector(".container .slider-scrollbar-3");
    const scrollbarThumb3 = sliderScrollbar3.querySelector(".scrollbar-thumb-3");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;

    slideButtons3.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-3" ? -1 : 1;
            const scrollAmount = imageList3.clientWidth * direction;
            imageList3.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })

    scrollbarThumb3.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb3.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX =  e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar3.getBoundingClientRect().width - scrollbarThumb3.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft3;

            scrollbarThumb3.style.left = `${boundedPosition}px`;
            imageList3.scrollLeft = scrollPosition;
        }

        const handleMoueUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMoueUp);
        }

        document.addEventListener("mousemove", handleMouseMove)
    })

    const handleSlideButtons = () => {
        slideButtons3[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "block";
        slideButtons3[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "block";
    }
    
    const updateScrollThumbPosition = () => {
         const scrollPosition = imageList3.scrollLeft;
         const thumbPosition = (scrollPosition / maxScrollLeft3) * (sliderScrollbar3.clientWidth - scrollbarThumb3.offsetwidth);
        scrollbarThumb3.style.left = `${thumbPosition}px`;
     }

    imageList3.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}
window.addEventListener("load", initSlider3);


function comment() {
    var nev = document.querySelector(".nev").value;
    var ertekeles = Number(document.querySelector(".ertekeles").value);
    var velemeny = document.querySelector(".velemeny").value;
    var commentSection = document.querySelector(".commentSection");
    const elso = new bootstrap.Modal(document.getElementById('elso'))
    const masodik = new bootstrap.Modal(document.getElementById('masodik'))
    const harmadik = new bootstrap.Modal(document.getElementById('harmadik'))


    if (nev.length<1){
        elso.show();
    }else if (ertekeles == "") {
        masodik.show();
    }else if (velemeny.length<1) {
        harmadik.show();
    }else {
        var stars = '';
        for (var i = 0; i<ertekeles; i++){
            stars +='<i class="bi-star-fill"></i>';
        }
        commentSection.innerHTML += '<div class="comment"><div class="d-flex"><div class="d-flex"><i class="bi bi-person-circle"></i><h4>' + nev + '</h4></div><div class="stars">' + stars + '</div></div><hr><p>' + velemeny + '</p></div>';
        // Az efelett lévő sorban ha += akkor több komment, ha csak = akkor csak egy komment küldése lehetséges a felhasználónak. (Mindig átírja azt az egyet!)
        var storedComments = JSON.parse(localStorage.getItem("Comments")) || [];
        storedComments.push({
            nev: nev,
            ertekeles: ertekeles,
            velemeny: velemeny
        });
        localStorage.setItem("Comments", JSON.stringify(storedComments));
        refreshComments();

    }

}

function refreshComments() {
    var commentSection = document.querySelector(".commentSection");
    var storedComments = JSON.parse(localStorage.getItem("Comments")) || [];
    commentSection.innerHTML = ''
    storedComments.forEach(function (comment) {
        var stars = '';
        for (var i = 0; i < comment.ertekeles; i++) {
            stars += '<i class="bi-star-fill"></i>';
        }
        commentSection.innerHTML += '<div class="comment"><div class="d-flex"><div class="d-flex"><i class="bi bi-person-circle"></i><h4>' + comment.nev + '</h4></div><div class="stars">' + stars + '</div></div><hr><p>' + comment.velemeny + '</p></div>';
    });

}
window.addEventListener('load', function () {
    refreshComments();
  })


