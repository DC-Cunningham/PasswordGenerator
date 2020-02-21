// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = "!#$%&*+-./<=>?@[^_`{|}~";
var chosenCharacters = "";
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  passwordText = "";
  chosenCharacters = "";
  var passwordText = document.querySelector("#password");
  chooseCharacters();
  passwordText.value = password;
}
// generate a random string that creates the password from the chosen characters
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    password =
      password +
      chosenCharacters.charAt(
        Math.floor(Math.random() * chosenCharacters.length)
      );
  }
}
// What sort of Password do you want
// Include arrays as selected by user
function chooseCharacters() {
  // ask how many characters the password needs to be
  passwordLength = prompt(
    "How long would you like your generated password to be? (Values between 8 and 128 characters are accepted)"
  );
  // check length of password is a number and within range
  if (passwordLength > 7 && passwordLength < 129) {
    // choose if lowerCase needed
    includeLowerCase = confirm(
      "Click OK if you would like your password to have lowercase letters"
    );
    if (includeLowerCase === true) {
      chosenCharacters = chosenCharacters + lowerCase;
    }
    // choose if upperCase is needed
    includeUpperCase = confirm(
      "Click OK if you would you like your password to have uppercase letters"
    );
    if (includeUpperCase === true) {
      chosenCharacters = chosenCharacters + upperCase;
    }
    // choose if numeric is needed
    var includeNumeric = confirm(
      "Click OK if you would you like your password to have numeric values"
    );
    if (includeNumeric === true) {
      chosenCharacters = chosenCharacters + numeric;
    }
    // choose if specialCharacters needed
    var includeSpecialCharacters = confirm(
      "Click OK if you would you like your password to have special characters?"
    );
    if (includeSpecialCharacters === true) {
      chosenCharacters = chosenCharacters + specialCharacters;
    }
    alert("Your password has now been generated");
    generatePassword();
  } else {
    alert("The password must be a number from 8 to 128, please try again.");
  }
}
