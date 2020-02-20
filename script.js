// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = 0;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = ["0123456789"];
var specialCharacters = ["!#$%&*+-./<=>?@[^_`{|}~"];
var chosenCharacters = [];
var password = "string";

// Write password to the #password input
function writePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var password = chosenCharacters.charAt(
      Math.floor(Math.random() * passwordLength) + 1
    );
  }
  return password;
  console.log(password);
  passwordText.value = password;
}

// What sort of Password do you want
// Include arrays as selected by user
var chosenCharacters = Function();
{
  // ask how many characters password needs to be
  var passwordLength = prompt(
    "How long would you like your generated password to be? (Values between 8 and 128 characters are accepted)"
  );
}
console.log(passwordLength);
// check length of password is a number and within range
if (passwordLength > 7 && passwordLength < 129) {
  // check if lowerCase required
  includeLowerCase = confirm(
    "Click OK if you would like your password to have lowercase letters"
  );
  if (includeLowerCase === true) {
    chosenCharacters = chosenCharacters + lowerCase;
  }

  console.log(chosenCharacters);
  // choose if upperCase is needed
  includeUpperCase = confirm(
    "Click OK if you would you like your password to have uppercase letters"
  );
  if (includeUpperCase === true) {
    chosenCharacters = chosenCharacters + upperCase;
  }
  console.log(chosenCharacters);
  // choose if numeric is needed
  var includeNumeric = confirm(
    "Click OK if you would you like your password to have numeric values"
  );
  if (includeNumeric === true) {
    chosenCharacters = chosenCharacters + numeric;
  }
  console.log(chosenCharacters);
  // choose if specialCharacters needed
  var includeSpecialCharacters = confirm(
    "Click OK if you would you like your password to have special characters?"
  );
  if (includeSpecialCharacters === true) {
    chosenCharacters = chosenCharacters + specialCharacters;
  }
  console.log(chosenCharacters);
  writePassword();
  alert();
} else {
  alert("The password must be a number from 8 to 128, please try again.");
}

// Function(writePassword);
// {
//   var length = prompt(
//     "How long would you like your generated password to be? (Values between 8 and 128 characters are accepted)"
//   );
//   console.log(chosenCharacters);
//   var includeLowerCase = confirm(
//     "Click OK if you would like your password to have lowercase letters"
//   );
//   console.log(chosenCharacters);
//   var includeUpperCase = confirm(
//     "Click OK if you would you like your password to have uppercase letters"
//   );
//   console.log(chosenCharacters);
//   var includeNumeric = confirm(
//     "Click OK if you would you like your password to have numeric values"
//   );
//   console.log(chosenCharacters);
//   var includeSpecialCharacters = confirm(
//     "Click OK if you would you like your password to have special characters?"
//   );
//   console.log(chosenCharacters);
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
