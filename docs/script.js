// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$","%", "^", "*", "+", "?", "&"];
var lowUpSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialLowSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!", "@", "#", "$","%", "^", "*", "+", "?", "&"];
var specialUpSet = ["A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$","%", "^", "*", "+", "?", "&"];

// Write password to the #password input
function writePassword() {

  var askLength = prompt("What length would you like the password? It has to be between 8 and 128 characters...");
  console.log(askLength);

  if(askLength < 8 || askLength < 8 && askLength > 128){
      alert("Woah there, buckaroo! Your password can't be less than 8 or above 120 characters! Please refresh page to start over :)");   
  }
  alert("Now pick two types of characters of any kind, or all of them: lowercase, uppercase, and or special characters...");

  var passContentLower = confirm("Would you like lowercase characters in you password?");
  console.log(passContentLower);
  var passContentUpper = confirm("Would you like uppercase characters?");
  console.log(passContentUpper);
  var passContentSpecial = confirm("Would you like special characters?");
  console.log(passContentSpecial);

  if(passContentLower === false && passContentUpper === false && passContentSpecial === false){
    alert("So a no character password, huh? Then why do you want a password? Just refresh or leave this page I guess...");
    return false;
  }



var password = generatePassword(askLength, passContentLower, passContentUpper, passContentSpecial);

var passwordText = document.querySelector("#password");

passwordText.value = password;

}


function generatePassword(askLength, passContentLower, passContentUpper, passContentSpecial){

  var password = '';

    if(passContentLower === true && passContentUpper === true && passContentSpecial === true){
        for(var i = 0; i < askLength; i++){
          var randomGen = Math.floor(Math.random() * charSet.length);

          password += charSet[randomGen];
        }
        console.log(password);
        return password;
      
      }
    

    if(passContentLower === true && passContentUpper === true){
      for(var i = 0; i < askLength; i++){
        var randomGen = Math.floor(Math.random() * lowUpSet.length);

        password += lowUpSet[randomGen];
      }
      console.log(password);
      return password;
    }

    if(passContentLower === true && passContentSpecial === true){
      for(var i = 0; i < askLength; i++){
        var randomGen = Math.floor(Math.random() * specialLowSet.length);

        password += specialLowSet[randomGen];
      }
      console.log(password);
      return password;
    }

    if(passContentUpper === true && passContentSpecial === true){
      for(var i = 0; i < askLength; i++){
        var randomGen = Math.floor(Math.random() * specialUpSet.length);

        password += specialUpSet[randomGen];
      }
      console.log(password);
      return password;
    }
 
}

   

  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

