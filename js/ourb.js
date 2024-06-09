vedett("all");

function vedett(c){
    var madaraink = document.getElementsByClassName("madaraink");
    if (c=="all") c = "";
    for (var i = 0; i<madaraink.length; i++){
        removeClass(madaraink[i], "show");
        if(madaraink[i].className.indexOf(c)>-1){
            addClass(madaraink[i], "show");
        }
    }
}

function addClass(element, name){
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++){
        console.log("csinál")
        if (arr1.indexOf(arr2[i])==-1){
            element.className+=" " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i<arr2.length; i++){
        while (arr1.indexOf(arr2[i])>-1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}