var input = document.getElementById("userinput");
var add = document.getElementById("button");
var myList = document.querySelector("ul");



function itemLength() {
	return input.value.length;
}

function addTask() {
	var li = document.createElement("li");
	var txt = document.createTextNode(input.value);
	var newButton = document.createElement("button");
	var del = document.createTextNode("Delete");
	newButton.appendChild(del);
	newButton.className = "close";
	li.appendChild(txt);
	li.appendChild(newButton);
	myList.appendChild(li);
	input.value = "";
	for (i = 0; i < x.length; i++) {
    x[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

function afterClick() {
	if (itemLength() > 0) {
		addTask();
	}
}

function afterKeypress(event) {
	if(itemLength() > 0 && event.keyCode === 13) {
		addTask();
	}
}

add.addEventListener("click", afterClick);
input.addEventListener("keypress",afterKeypress);


var x = document.getElementsByClassName("close");
var i;
for (i = 0; i < x.length; i++) {
	x[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
	}
}
