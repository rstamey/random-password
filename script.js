// Assignment code here
var passwordLength = 10;
const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charLength = charSet.length;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
console.log ('password', password)
console.log (passwordText)
}
function generatePassword(){
  var newPassword = ""
    for (var i = 1; i <= passwordLength; i++) {
   newPassword += charSet.charAt(Math.floor(Math.random() * charLength));
   console.log ('newPASSWORD', newPassword)
  }
  return newPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
