import { characters } from "./data.js";
let buttonPassword = document.querySelector("#generate-password");
let lengthPassword = 14;
let passwordOne = document.querySelector("#password-1");
let passwordTwo = document.querySelector("#password-2");
let selectValue = document.querySelector("#number-select");

// Function to select the lenght of the password
selectValue.addEventListener("change", getValueOfSelectOnChange);

function getValueOfSelectOnChange() {
	let value = selectValue.value;
	lengthPassword = value;
}

// Function to have the password
buttonPassword.addEventListener("click", generatePassword);

function getRandom() {
	return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
	passwordOne.innerText = "";
	passwordTwo.innerText = "";
	for (let i = 0; i < lengthPassword; i++) {
		let random = getRandom();
		passwordOne.innerText += characters[random];
	}
	for (let i = 0; i < lengthPassword; i++) {
		let random = getRandom();
		passwordTwo.innerText += characters[random];
	}
}

// Fonction pour copier un texte
function copyTextToClipboard() {
	navigator.clipboard.writeText(this.textContent);
	alert("password copied");
}

passwordTwo.addEventListener("click", copyTextToClipboard);
passwordOne.addEventListener("click", copyTextToClipboard);
