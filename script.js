
// Get references to the #generate element*/
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // asks for password length
  var passwordLength = prompt("Enter password length (minimum 8 characters and maximum 128 characters):");
  // check if password length is ok
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters. try again.");
    passwordLength = prompt("Enter password length (min 8 characters and max 128):");
  }
  // ask what chars
  var includeLowercase = confirm("Include lowercase characters in the password?");
  var includeUppercase = confirm("Include uppercase characters in the password?");
  var includeNumbers = confirm("Include number characters in the password?");
  var includeSpecial = confirm("Include special characters in the password?");
  // char choses
   while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must select at least one character type. Please try again.");
    includeLowercase = confirm("Include lowercase characters in the password?");
    includeUppercase = confirm("Include uppercase characters in the password?");
    includeNumbers = confirm("Include number characters in the password?");
    includeSpecial = confirm("Include special characters in the password?");
  }
  // define chars
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':<>,.?/";
  // combine characters
  var characterSet = "";
  if (includeLowercase) { characterSet += lowercase; }
  if (includeUppercase) { characterSet += uppercase; }
  if (includeNumbers) { characterSet += numbers; }
  if (includeSpecial) { characterSet += special; }
  // generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  // return the password to be passed the window
   return password;
}
// button event listener
generateBtn.addEventListener("click", writePassword);