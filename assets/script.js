// Assignment code here

var charNumb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSymb = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomIndex(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomNum];

  return randomChar;
}

//generate password
function generatePassword () {
var possibleChar = [];
var result = [];

// prompt user for password criteria: length of pass 8-128, lowercase, uppercase, special characters
var confirmLength = parseInt(prompt("How many characters in your password? Choose between 8-128."));
if(confirmLength < 8 || confirmLength >128) {
  alert('Password must have character amount between 8 and 128.')
  return null;
}

var confirmCharSymb = (prompt("Type YES to include special characters"));
if(confirmCharSymb==='YES' || confirmCharSymb==='yes'){
  possibleChar = possibleChar.concat(charSymb)
}

var confirmCharNumb = (prompt("Type YES to include numeric characters"));
if(confirmCharNumb==='YES' || confirmCharNumb==='yes'){
  possibleChar = possibleChar.concat(charNumb)
}

var confirmCharLower = (prompt("Type YES to include lowercase characters"));
if(confirmCharLower==='YES' || confirmCharLower==='yes'){
  possibleChar = possibleChar.concat(charLower)
}
var confirmCharUpper = (prompt("Type YES to include uppercase characters"));
if(confirmCharUpper==='YES' || confirmCharUpper==='yes'){
  possibleChar = possibleChar.concat(charUpper)
}

if(possibleChar.length === 0) {
  alert('You must select one character type')
  return null;
}

for(var i = 0; i<confirmLength; i++) {
  var selectedChar = randomIndex(possibleChar);

  result.push(selectedChar);
}

//display pass
  return result.join('');
};


// Get references to the #generate element targets generate btn
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when button is cliked, it will call writePass function
generateBtn.addEventListener("click", writePassword);
