var input = document.getElementById("typeitem")
var button = document.getElementById("addItem")
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
ul.onclick = function(event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}

//below code to remove item on dblclick is broken, currently removing entire parent ul and not adding any after


// function removeParent (evt) {
//     evt.target.removeEventListener("dblclick", removeParent, false);
//     evt.target.parentNode.remove();
// }
// ul.ondblclick = function(event) {
//     event.target.parentNode.remove();
// }
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);