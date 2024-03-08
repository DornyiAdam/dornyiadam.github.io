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
        commentSection.innerHTML += '<div class="comment"><div class="d-flex"><h4>' + nev + '</h4><div>' + stars + '</div></div><p>' + velemeny + '</p></div>';
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
        commentSection.innerHTML += '<div class="comment"><div class="d-flex"><h4>' + comment.nev + '</h4><div>' + stars + '</div></div><p>' + comment.velemeny + '</p></div>';
    });

}
window.addEventListener('load', function () {
    refreshComments();
  })


