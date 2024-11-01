// ====== Képek adatainak beállítása ======
const kepek = {
    1: "img-1.webp",
    3: "img-3.webp",
    6: "img-6.webp",
    7: "img-7.webp",
    8: "img-8.webp",
    9: "img-9.webp",
    10: "img-10.webp",
    11: "img-11.webp",
    14: "img-14.webp",   // új elem
    16: "img-16.webp",
    17: "img-17.webp",
    19: "img-19.webp",
    21: "img-21.webp",
    25: "img-25.webp",
    27: "img-27.webp",
    31: "img-31.webp",
    42: "img-42.webp",
    566: "img-566.webp",
    618: "img-618.webp",
    621: "img-621.webp",
    739: "img-739.webp",
    743: "img-743.webp",
    101: "img-101.webp", // új elem
    107: "img-107.webp", // új elem
    111: "img-111.webp", // új elem
    112: "img-112.webp", // új elem
    118: "img-118.webp", // új elem
    129: "img-129.webp", // új elem
    134: "img-134.webp", // új elem
    454: "img-454.webp",
    455: "img-455.webp",
    457: "img-457.webp",
    458: "img-458.webp",
    460: "img-460.webp",
    467: "img-467.webp",
    477: "img-477.webp",
    486: "img-486.webp",
    492: "img-492.webp",
    495: "img-495.webp",
    401: "img-401.webp",
    406: "img-406.webp",
    409: "img-409.webp",
    410: "img-410.webp",
    413: "img-413.webp",
    418: "img-418.webp",
    422: "img-422.webp",
    426: "img-426.webp",
    432: "img-432.webp",
    433: "img-433.webp",
    505: "img-505.webp",
    506: "img-506.webp",
    507: "img-507.webp", // új elem
    537: "img-537.webp",
    539: "img-539.webp",
    543: "img-543.webp",
    544: "img-544.webp",
    548: "img-548.webp",
    550: "img-550.webp",
    570: "img-570.webp",
    576: "img-576.webp",
    582: "img-582.webp",
    583: "img-583.webp", // új elem
    588: "img-588.webp",
    589: "img-589.webp",
    605: "img-605.webp",
    610: "img-610.webp", // új elem
    612: "img-612.webp", // új elem
    620: "img-620.webp",
    624: "img-624.webp",
    629: "img-629.webp",
    637: "img-637.webp",
    640: "img-640.webp",
    642: "img-642.webp",
    643: "img-643.webp",
    646: "img-646.webp",
    655: "img-655.webp",
    657: "img-657.webp",
    658: "img-658.webp",
    663: "img-663.webp",
    667: "img-667.webp",
    672: "img-672.webp",
    673: "img-673.webp",
    679: "img-679.webp",
    687: "img-687.webp",
    689: "img-689.webp",
    690: "img-690.webp",
    691: "img-691.webp",
    696: "img-696.webp",
    800: "img-800.webp",
    804: "img-804.webp",
    805: "img-805.webp",
    807: "img-807.webp",
    809: "img-809.webp",
    812: "img-812.webp",
    813: "img-813.webp",
    819: "img-819.webp",
    831: "img-831.webp",
    833: "img-833.webp",
    837: "img-837.webp",
    859: "img-859.webp",
    860: "img-860.webp",
    861: "img-861.webp",
    862: "img-862.webp",
    863: "img-863.webp",
    868: "img-868.webp",
    869: "img-869.webp",
    872: "img-872.webp",
    877: "img-877.webp",
    887: "img-887.webp",
    893: "img-893.webp",
    904: "img-904.webp",
    909: "img-909.webp",
    915: "img-915.webp",
    916: "img-916.webp",
    920: "img-920.webp",
    923: "img-923.webp",
    934: "img-934.webp",
    935: "img-935.webp",
    940: "img-950.webp",
    945: "img-945.webp",
    952: "img-952.webp",
    957: "img-957.webp",
    958: "img-958.webp",
    961: "img-961.webp",
    963: "img-963.webp",
    966: "img-966.webp",
    968: "img-968.webp",
    971: "img-971.webp",
    974: "img-974.webp",
    975: "img-975.webp",
    978: "img-978.webp",
    982: "img-982.webp",
    984: "img-984.webp",
    986: "img-986.webp",
    987: "img-987.webp",
    988: "img-988.webp",
    998: "img-998.webp",
    517: "img-517.webp", // új elem
    612: "img-612.webp", // új elem
    201: "img-201.webp", // új elem
    205: "img-205.webp", // új elem
    206: "img-206.webp", // új elem
    213: "img-213.webp", // új elem
    224: "img-224.webp", // új elem
    238: "img-238.webp", // új elem
    304: "img-304.webp", // új elem
    309: "img-309.webp", // új elem
    312: "img-312.webp", // új elem
    368: "img-368.webp", // új elem
    373: "img-373.webp", // új elem
    396: "img-396.webp", // új elem
    402: "img-402.webp", // új elem
    405: "img-405.webp", // új elem
    407: "img-407.webp", // új elem
};


// ====== Játék változók inicializálása ======
var jatek = false;
const kulcsok = Object.keys(kepek);
const images = Object.values(kepek);
var pontok = 0;
var found = []
var wrong = []
var randomKulcs = kulcsok[Math.floor(Math.random() * kulcsok.length)];

// ====== Első kép beállítása ======
document.querySelector("img").src = `vikiwebp/${kepek[randomKulcs]}`;
document.querySelector("img").addEventListener("error", findWrong);
function findWrong() {
    wrong.push(randomKulcs)
    next()
}
// ====== Kép hiba esetén következő kép betöltése ======
function next() {
    document.querySelector(".cheat").style.display = "none";
    found.push(randomKulcs)
    delete kepek[randomKulcs];
    const remainingKeys = Object.keys(kepek);
    if (remainingKeys.length > 0) {
        randomKulcs = remainingKeys[Math.floor(Math.random() * remainingKeys.length)];
        document.querySelector("img").src = `vikiwebp/${kepek[randomKulcs]}`;
        helpuser()
    } else {
        console.log("Nincs több kép.");
        console.log(wrong)
    }
}

// ====== Fejlesztői mód ellenőrzése ======
//var dev = confirm("Szeretnéd látni a megoldásokat?");
var dev = confirm("Szeretnéd látni a megoldásokat egyből?");


// ====== Pontszám kijelző frissítése ======
setInterval(() => {
    document.querySelector(".score").innerHTML = pontok;
}, 100);

// ====== Visszajelzés megjelenítése helyes és helytelen válaszra ======
function showFeedback(isCorrect) {
    const feedback = document.getElementById("feedback");
    const feedbackIcon = document.getElementById("feedbackIcon");

    if (isCorrect) {
        pontok++;
        feedbackIcon.textContent = "✅";  // Check mark for correct answer
    } else {
        feedbackIcon.textContent = "❎";  // X for incorrect answer
        console.log(randomKulcs);
    }

    // Show feedback
    feedback.classList.remove("hidden");

    // Set timeout for hiding feedback and then move to next question
    setTimeout(() => {
        feedback.classList.add("hidden");
        next();  // Call next() after feedback is shown
    }, 200);
}

// ====== Gombkattintás eseménykezelő ====
function handlestuff() {
    const inputValue = document.querySelector("input").value;
    if (randomKulcs == inputValue) {
        showFeedback(true);  // Correct answer
        document.querySelector("input").value = ""; // Clear input after feedback is shown
    } else {
        showFeedback(false); // Incorrect answer
    }
}

document.querySelector("button").addEventListener("click", handlestuff);
document.querySelector("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        handlestuff();
    }   
});

helpuser()
// HELP
function helpuser() {
    if (dev) {
        setTimeout(() => {
            document.querySelector(".cheat").style.display = "block";
            document.querySelector(".cheat").innerHTML = randomKulcs
        }, 15000);

    }
}