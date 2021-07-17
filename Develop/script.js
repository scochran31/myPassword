// Assignment code here
var special = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'
];

var number = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

var lower = [
 ' a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upper = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function generatePassword() {
  var getLength = prompt('Please enter a number between 8-128 for your password');
  
  if (typeof(getLength) == 'number')
    if (
      (getLength >= 8 || getLength <= 128)
    ) { return 'Thank you for choosing a number!'
    } else {
      prompt('Please choose a number between 8-128');
    };
  };

  var getNumbers = confirm('Do you want numbers in your password?')

  var getSpecial = confirm('Do you want special characters in your password?') 

  var getLower = confirm('Do you want lower cased letters in your password?')

  var getUpper = confirm('Do you want upper cased letters in your password?')
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
