// Assignment Code
var hasSpecialCharacters[

]

var NumericCharacters[

]
var normalCharacters[

]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword();

// get variable to store length of password from user input
// show alert if the length variable isnt above certain number
// show alert if less than 8 char
// show alert if above 128 char
var options = getPasswordOptions

var hasSpecialCharacters = confirm(
  "click OK to confirm including special characters."
)
// add variable for numbers, uppercase, lowercase
// alert for adding at least one special character
var passwordOptions = {
  length: 
  hasSpecialCharacters:
  hasNumbers:
  hasUppercase:
  hasLowercase:
};
return passwordOptions

function generatePassword{
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteed
}

if (options.hasSpecialCharacters) {


}

function writePassword() {
  var password = generatePassword
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
