// Assignment code here
var passwordText = document.querySelector("#password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randomChar = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateBtn.addEventListener("click",function () {
  var randomLower = confirm('Would you like your password to include lower cased letters?');
  var randomUpper = confirm('Would you like your password to include upper cased letters');
  var randomNumber = confirm('Would you like your password to include numbers?');
  var randomSymbol = confirm('Would you like your password to include symbols?');
  var length = prompt('Please choose between 8-128 characters for your password.');

  passwordText.innerHTML = generatePassword(randomLower, randomUpper, randomNumber, randomSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = '';
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if (typesCount === 0) {
    return alert('Try again and choose options for password!');
  }
  
  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var charName = Object.keys(type)[0];
      generatedPassword += randomChar[charName]();
    });
  }
  // Write password to the #password input
  var password = generatedPassword.slice(0, length);

  return password;
}

// Add event listener to generate button

//Random character generators
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};
function getRandomSymbol() {
  var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
};
