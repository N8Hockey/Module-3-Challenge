var lowercaseCharCodes = arrayFromLowToHigh(97, 122);
var uppercaseCharCodes = arrayFromLowToHigh(65, 90);
var numberCharCodes = arrayFromLowToHigh(48, 57);
var symbolCharCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", function() {
  var passwordLength = prompt("Enter password length (between 8 and 128 characters):");

  if (passwordLength === null) {
    return;
  }

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  var includeLowercase = prompt("Include lowercase characters? (Enter 'y for yes' or 'n for no')").toLowerCase() === "y";
  var includeUppercase = prompt("Include uppercase characters? (Enter 'y for yes' or 'n for no')").toLowerCase() === "y";
  var includeNumbers = prompt("Include numbers? (Enter 'y for yes' or 'n for no')").toLowerCase() === "y";
  var includeSymbols = prompt("Include symbols? (Enter 'y for yes' or 'n for no')").toLowerCase() === "y";

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert("You must select at least one character type.");
    return;
  }

  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

  var passwordEl = document.getElementById("password");
  passwordEl.textContent = password;
});

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  var charCodes = [];

  if (includeLowercase) {
    charCodes = charCodes.concat(lowercaseCharCodes);
  }

  if (includeUppercase) {
    charCodes = charCodes.concat(uppercaseCharCodes);
  }

  if (includeNumbers) {
    charCodes = charCodes.concat(numberCharCodes);
  }

  if (includeSymbols) {
    charCodes = charCodes.concat(symbolCharCodes);
  }

  var passwordCharacters = [];

  for (var i = 0; i < passwordLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  var array = [];

  for (var i = low; i <= high; i++) {
    array.push(i);
  }

  return array;
}
