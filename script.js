// Arrays for character choice
var hasSpecialCharacters = [
"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"
];

var hasNumbers = [
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0" 
];
var hasLowercase = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var hasUppercase = [
 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" 
];

// Array for password length between 8 and 128
var options
var length = 8;

// Assign generate button to query selector

var generateBtn = document.querySelector("#generate");

// Allows generate button to show arrays
generateBtn.addEventListener("click", createPassword);

// Write password to the #password input
function createPassword() {
  var password = passwordOptions();
  var passwordText = document.querySelector("#password");

  if (password) {
    var userPassword = generatePassword();
    passwordText.value = userPassword;
  } else {
    passwordTest.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * options.length);
    password = password + options[randomIndex];
  }
  return password;
}

// get variable to store length of password from user input
// show alert if the length variable isnt above certain number
// show alert if less than 8 char
// show alert if above 128 char

function passwordOptions() {
options = [];
length = parseInt(prompt("What would you like your password length to be?"));

if(isNaN(length) || length < 8 || length>128) {
  alert("Please enter a valid number between 8 and 128");
  return false;
}
// add variable for numbers, uppercase, lowercase
// alert for adding at least one special character

if (confirm("Would you like special characters in your password? ex (!@#)")) {
  options = options.concat(hasSpecialCharacters);
}

if (confirm("Would you like numbers included in your password?")) {
options = options.concat(hasNumbers);
}

if (confirm("would you like capital letters included in your password?")) {
  options = options.concat(hasUppercase);
}

if (confirm("Would you like lower case letters included in your password?")) {
  options = options.concat(hasLowercase);
}
return true; 
}