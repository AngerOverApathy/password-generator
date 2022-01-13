// Assignment code here

var charNumbSymb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword () {
console.log(upperCaseChar)
// pprompt user for password criteria

//length of pass 8-28, lowercase, uppercase, special characters
var confirmLength = (prompt("How many characters in your password? Choose between 8-28."));
//input validation

//generate password



//display pass
  return "Password will go here!"
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
