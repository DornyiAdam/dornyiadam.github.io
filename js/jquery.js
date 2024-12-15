var p = $(".firstP");
var button = $(".button");
$(document).ready(function () {
    button.on("click", function () {
        p.html("Hello world!")
    })
});

/**
 * Next -->
 * 
 */

var $btn = $(".btn");
var $div = $(".goat");
$(document).ready(function () {
    $btn.on("click", function () {
        $div.toggleClass("highlight");
    })
});

$(document).ready(function () {
    var $input = $("input");
    var $inputP = $(".input");
    var $inputButton = $(".inputButton");
    $inputButton.on("click", function () {
        var inputText = $input.val();
        if (inputText != "") {
            $inputP.text(inputText.toUpperCase())
        }
        else {
            alert("❌❌❌❌❌")
            $inputP.text("💀")
        }
        
    });
});
/**
 * 
Következő feladatként egy kicsit összetettebb problémát próbálhatunk megoldani. Íme:

4. Feladat: Todo lista
Feladat: Készíts egy egyszerű todo listát, amely lehetővé teszi új elemek hozzáadását, meglévők törlését és az összes elem törlését.

Elvárások:
A felületnek tartalmaznia kell egy input mezőt az új feladatok hozzáadásához, egy gombot az új feladatok hozzáadásához, egy listát a feladatok megjelenítéséhez, és minden elem mellett egy törlés gombot.
Amikor a felhasználó új feladatot ad hozzá az input mezőben lévő szöveg alapján, azt hozzá kell adni a lista végéhez.
Minden feladat mellett legyen egy törlés gomb, amely lehetővé teszi a felhasználónak, hogy törölje az adott feladatot.
A törlés gombra kattintva a feladatot azonnal eltávolítjuk a listából.
Adj egy "Minden törlése" gombot, amely lehetővé teszi a felhasználónak, hogy az összes feladatot egyszerre törölje.
Példa felület:
 */
$(document).ready(function() {
    var show = $(".show");
    var newButton = $(".new");
    var newInput = $(".newItem");
    var todoUl = $(".todoUl");
    var deleteUl = $(".delete");
    var sorting = $(".sort");
    var id = 0;
    newButton.on("click", function() {
        if(newInput.val() != "") {
            id++
            $("<li class='d-flex'>"+ id + ". " + newInput.val() +  "<button class='del'>Törlés</button>  </li>").appendTo(todoUl)
        }
        else {
            alert("❌❌❌❌❌")
        }
    });
    todoUl.on("click", ".del", function() {
        $(this).parent().remove();
    });
    todoUl.on("click", "li", function() {
        $(this).toggleClass("done")
    });
    deleteUl.on("click", function() {
        todoUl.empty();
        id = 0;
    });
    show.on("click", function() {
        todoUl.toggleClass("hide")
    });
    sorting.on("click", function() {
        var items = todoUl.children("li").get();
        items.sort(function(a, b) {
            var idA = parseInt($(a).attr("id"));
            var idB = parseInt($(b).attr("id"));
            return idA - idB;
        });
        todoUl.empty();
        $.each(items, function(index, item) {
            todoUl.append(item); 
        });
    })
});

