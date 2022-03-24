var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // luo elementin "li"
	li.appendChild(document.createTextNode(input.value)); //muuttaa tekstin input kentästä li-tekstiksi, eli listan tekstiksi
	ul.appendChild(li); //lisää listan ul:liin
	input.value = ""; //Resetoi tekstin syöttökentän

  //Aloita strikethrough
	//Koska se on funktiossa, se vain lisää uusia objekteja listaan
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//Lopeta strikethrough


	//ALOITA Lisää delete painike
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	//LOPETA lisää delete painike


	//ALOITA Lisää luokka DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//LOPETA lisää luokka DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //varmistaa sen että tyhjä syöttökenttä ei luo uutta listaa
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode ===13) { //katsotaan että käyttäjä painaa enteristä
		//13 on enterin avainkoodi
		createListElement();
	}
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
