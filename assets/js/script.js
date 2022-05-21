// Assignment code here

// number arrays
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// symbols arrays
var symbols = ['!', '%', '&', ',', '*', '+', '-', '.', '/', '<', '>', '?', '~'];
// lowercase letters array
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// uppercase letters array
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// start function to generate password
var generatePassword = function () {
  // prompt user for password criteria
  var passwordLength = (prompt('Please choose a password length between 8 and 128'));

  // while loop to if passwordLength criteria has been met
  while (passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters. Try again.');
    var passwordLength = (prompt('How many characters would you like your password to be?'));
  }

  // let user know how many characters they chose
  alert(`Your password will have ${passwordLength} characters.`);

  // determine parameters of password
  // does the user want special characters in their password?
  var getSymbol = confirm('Click OK to confirm that you want special characters.');
  // does the user want numbers in their password?
  var getNumber = confirm('Click OK to confirm that you want numbers.');
  // does the user want lowercase letters in their password?
  var getLowercase = confirm('Click OK to confirm that you want lowercase letters.');
  // does the user want uppercase letters in their password?
  var getUppercase = confirm('Click OK to confirm that you want uppercase letters.');

  // loop until the answer is within the parameters
  while (getUppercase === false && getLowercase === false && getSymbol === false && getNumber === false) {
    alert('You must choose at least one parameter');
    var getSymbol = confirm('Click OK to confirm that you want special characters.');
    var getNumber = confirm('Click OK to confirm that you want numbers.');
    var getLowercase = confirm('Click OK to confirm that you want lowercase letters.');
    var getUppercase = confirm('Click OK to confirm that you want uppercase letters.');
  }
};

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
