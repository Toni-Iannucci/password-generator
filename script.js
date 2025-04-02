const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let buttonPassword = document.querySelector("#generate-password");
let lengthPassword = 14;
let passwordOne = document.querySelector("#password-1");
let passwordTwo = document.querySelector("#password-2");



buttonPassword.addEventListener("click",generatePassword);


function getRandom() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword(){
  passwordOne.innerText = ''
  passwordTwo.innerText = ''
  for (let i = 0; i < lengthPassword; i++) {
    let random = getRandom();
    passwordOne.innerText += characters[random];    
  }
  for (let i = 0; i < lengthPassword; i++) {
    let random = getRandom();
    passwordTwo.innerText += characters[random];    
  }
}


