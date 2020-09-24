// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$","%", "^", "*", "_", "+", "?", "&"];

// Write password to the #password input
function writePassword() {
  
  var passLength = prompt("What length would you like the password? It has to be between 8 and 128 characters...");
  if(passLength < 8 || passLength < 8 && passLength > 128){
    alert("Sorry, password length cannot be less than 8 or more than 128 characters. Please refresh page and start over :)");
}
else{
  alert("Nice, lets move on...")
}
  var charType = prompt("If you would like to add life to your new password, type: lowercase, uppercase, numeric, and/or special characters?");
  if(charType = "lowercase") {
    return Math.random()
  }


  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

