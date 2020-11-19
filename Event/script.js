var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var myNewInput = input.value;
	var li = document.createElement("li");
	var newElement = ul.appendChild(li); 
	newElement.innerHTML = myNewInput +" "+ "<button class='delete' onclick='removeItem(this)'>Delete</button>";
	//li.appendChild(document.createTextNode(input.value));

	//ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function removeItem(emt){
	var test = emt.parentNode;
	test.parentNode.removeChild(test);
}