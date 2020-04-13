var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("listtext");
	var fechar = document.createElement("button");
	fechar.appendChild(document.createTextNode("X"));
	li.appendChild(fechar);
	fechar.classList.add("listbutton");
	input.value = "";
	li.addEventListener("click", togglerisco);
	fechar.addEventListener("click", remove);
	function remove(){
		li.remove();
		fechar.remove();
	}
	function togglerisco(){
		li.classList.toggle("done")
	}
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


function size() {
	var discord = document.getElementById("discord");
	var mail = document.getElementById("mail");
	var gmail = document.getElementById("gmail");
	var discordd = document.getElementById("discordd");
	var maill = document.getElementById("maill");
	var gmaill = document.getElementById("gmaill");

	discord.addEventListener("mouseover", function(){
		discordd.classList.add("tamanhoicone");
	});
	mail.addEventListener("mouseover",function(){
		maill.classList.add("tamanhoicone");
	});
	gmail.addEventListener("mouseover", function () {
		gmaill.classList.add("tamanhoicone");
	});



	discord.addEventListener("mouseout", function(){
		discordd.classList.remove("tamanhoicone");
	});
	mail.addEventListener("mouseout",function(){
		maill.classList.remove("tamanhoicone");
	});
	gmail.addEventListener("mouseout", function () {
		gmaill.classList.remove("tamanhoicone");
	});

}
size();