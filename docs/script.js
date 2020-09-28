// Assignment Code
var generateBtn = document.querySelector("#generate");

//Four arrays for multiple outcomes based on what the user chooses...
var charSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$","%", "^", "*", "+", "?", "&"];
var lowSet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upSet = ["A", "B", "C", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specSet = ["!", "@", "#", "$","%", "^", "*", "+", "?", "&"];


// Time to get the users personal criteria
function writePassword() {

  //gets the length of the password the user wants.
  var askLength = prompt("What length would you like the password? It has to be between 8 and 128 characters...");
  console.log(askLength);

  if(askLength < 8 || askLength > 128){
      alert("Woah there, McQueen! Your password can't be less than 8 or above 128 characters! Please start over :)"); 
      return false;  
  }
  alert("Now pick characters of any kind, or all of them: lowercase, uppercase, numbers, and or special characters...");

//Takes the users boolean decisions and stores them in the console.
  var passContentLower = confirm("Would you like lowercase characters in you password?");
  console.log(passContentLower);
  var passContentUpper = confirm("Would you like uppercase characters?");
  console.log(passContentUpper);
  var passContentNum = confirm("Would you like numbers in your password?");
  console.log(passContentNum);
  var passContentSpecial = confirm("Would you like special characters?");
  console.log(passContentSpecial);

  if(passContentLower === false && passContentUpper === false && passContentNum === false && passContentSpecial === false){
    alert("So a no character password, huh? Then why do you want a password? Just refresh or leave this page I guess...");
    return false;
  }



var password = generatePassword(askLength, passContentLower, passContentUpper, passContentNum, passContentSpecial);

var passwordText = document.querySelector("#password");

passwordText.value = password;

}


//generates the password after validating criteria
function generatePassword(askLength, passContentLower, passContentUpper, passContentNum, passContentSpecial){

  var password = '';
  
  if(passContentLower === true && passContentUpper === true && passContentNum === true && passContentSpecial === true){
    //This loop, like the rest, generate a random string based on the users decisions. In this case, they want all types of characters so it takes the charSet array from above and generates a random password with the length being whatever the user wants from 8-128 characters.
        for(var i = 0; i < askLength; i++){
          var randomGen = Math.floor(Math.random() * charSet.length);

          password += charSet[randomGen];
        }
        // Takes the password and the validate function and makes sure all citeria is present in the password, if not, the password keeps going through the loop until it meets criteria
        if(!validatePassword(password)) {
          let password = "";
          while(validatePassword(password) ===  false) {
          for(var i = 0; i < askLength; i++){
            var randomGen = Math.floor(Math.random() * charSet.length);
            
            password += charSet[randomGen];
          }
        }
          
        }
        
        console.log(password);
        console.log("IM HERE all of them");
        return password;
      
      }

      if(passContentUpper  && !passContentLower  && !passContentNum && !passContentSpecial ){
        for(var i = 0; i < askLength; i++){
          var randomGen = Math.floor(Math.random() * upSet.length);

          password += upSet[randomGen];
        }

        
        console.log(password);
        console.log("Im here : only upper");
        return password;
      }

  if(passContentLower && !passContentUpper && !passContentNum && !passContentSpecial){

              for(var i = 0; i < askLength; i++){
                var randomGen = Math.floor(Math.random() * lowSet.length);

                password += lowSet[randomGen];
              }

              
              console.log(password);
              console.log("Im here: only lower");
              return password;
      }

  if(passContentNum && !passContentLower && !passContentUpper && !passContentSpecial){

              for(var i = 0; i < askLength; i++){
                var randomGen = Math.floor(Math.random() * numSet.length);

                password += numSet[randomGen];
              }
              console.log(password);
              console.log("Im here: only Numbers");
              return password;
      }

  if(passContentSpecial && !passContentLower && !passContentUpper && !passContentNum){

            for(var i = 0; i < askLength; i++){
              var randomGen = Math.floor(Math.random() * specSet.length);

              password += specSet[randomGen];
            }
            console.log(password);
            console.log("Im here: only Special");
            return password;
    }
    

  if(passContentLower === true && passContentUpper === true && !passContentNum && !passContentSpecial){

            for(var i = 0; i < askLength; i++){
              var combine = lowSet.concat(lowSet, upSet);
              var randomGen = Math.floor(Math.random() * combine.length);

              password += combine[randomGen];
            }

            console.log(password);
            console.log("Im here: upper and lower only");
            return password;

    }

  if(passContentLower === true && passContentUpper === true && passContentNum === true && !passContentSpecial){
              
            for(var i = 0; i < askLength; i++){
              var combine = lowSet.concat(lowSet, upSet, numSet);
              var randomGen = Math.floor(Math.random() * combine.length);

              password += combine[randomGen];
            }
            //Here, there are three validation fucntions this peticular password is going through. This if statement and while loop combine all three validations and sends the password into an infinate loop until it meets all criteria. 
            if(!validateLowCase(password) && !validateUpCase(password) && !validateNum(password)) {
              //sets the password to a blank string everytime it goes through the loop. We don't want a password any longer than designated.
              let password = "";
              while(validateLowCase(password) ===  false && validateUpCase(password) === false && validateNum(password) === false) {
              for(var i = 0; i < askLength; i++){
                var valCombine = lowSet.concat(lowSet, upSet, numSet);
                var randomGen = Math.floor(Math.random() * valCombine.length);
                
                password += valCombine[randomGen];
              }
            }
              
            }


            console.log(password);
            console.log("Im here: lower, upper, and numbers");
            return password;
          }

  if(passContentLower === true && passContentUpper === true && passContentSpecial === true && !passContentNum){

            for(var i = 0; i < askLength; i++){
              var combine = lowSet.concat(lowSet, upSet, specSet);
              var randomGen = Math.floor(Math.random() * combine.length);

              password += combine[randomGen];
            }

            if(!validateLowCase(password) && !validateUpCase(password) && !validateSpecial(password)) {
              let password = "";
              while(validateLowCase(password) ===  false && validateUpCase(password) === false && validateSpecial(password) === false) {
              for(var i = 0; i < askLength; i++){
                var valCombine = lowSet.concat(lowSet, upSet, specSet);
                var randomGen = Math.floor(Math.random() * valCombine.length);
                
                password += valCombine[randomGen];
              }
            }
              
          }

            console.log(password);
            console.log("Im here: lower, upper, and special");
            return password;
      }

  if(passContentLower === true && passContentNum === true && !passContentUpper && !passContentSpecial){

            for(var i = 0; i < askLength; i++){
              var combine = lowSet.concat(lowSet, numSet);
              var randomGen = Math.floor(Math.random() * combine.length);

              password += combine[randomGen];
            }

            
            console.log(password);
            console.log("Im here: only lower and numbers");
            return password;
     }

  if(passContentUpper === true && passContentNum === true && !passContentLower && !passContentSpecial){

          for(var i = 0; i < askLength; i++){
            var combine = upSet.concat(upSet, numSet);
            var randomGen = Math.floor(Math.random() * combine.length);

            password += combine[randomGen];
          }


          console.log(password);
          console.log("Im here: only upper and numbers");
          return password;
    }

    

  if(passContentLower === true && passContentSpecial === true && !passContentUpper && !passContentNum){

          for(var i = 0; i < askLength; i++){
            var combine = lowSet.concat(lowSet, specSet);
            var randomGen = Math.floor(Math.random() * combine.length);

            password += combine[randomGen];
          }

          
          console.log(password);
          console.log("Im here: only lower and special");
          return password;
  }

  if(passContentUpper === true && passContentSpecial === true && !passContentLower && !passContentNum){

          for(var i = 0; i < askLength; i++){
            var combine = upSet.concat(upSet, specSet);
            var randomGen = Math.floor(Math.random() * combine.length);

            password += combine[randomGen];
          }

          

          console.log(password);
          console.log("Im here: only upper and special");
          return password;

   }

    if(passContentNum === true && passContentSpecial === true && !passContentLower && !passContentUpper){
      for(var i = 0; i < askLength; i++){
        var combine = numSet.concat(numSet, specSet);
        var randomGen = Math.floor(Math.random() * combine.length);

        password += combine[randomGen];
      }
      console.log(password);
      console.log("Im here: only numbers and special");
      return password;
    }

  
}

//These functions were made to validate that each character set has its own character in the password based on the boolean criteria the user inputs...
function validatePassword(password){
  for(var i = 0; i < charSet.length; i++){
    if(password.indexOf(charSet[i]) > -1){
      return true;
    }
    else{
      return false;
    }
  }
}

function validateLowCase(password){
  for(var i = 0; i < lowSet.length; i++){
    if(password.indexOf(lowSet[i]) > -1){
      return true;
    }
    else {
      return false;
    }
  }
  
}

function validateUpCase(password){
  for(var i = 0; i < upSet.length; i++){
    if(password.indexOf(lowSet[i]) > -1){
      return true;
    }
    else{
      return false;
    }
  }
}

function validateNum(password){
  for(var i = 0; i < numSet.length; i++){
    if(password.indexOf(lowSet[i]) > -1){
      return true;
    }
    else{
      return false;
    }
  }
  
}

function validateSpecial(password){
  for(var i = 0; i < specSet.length; i++){
    if(password.indexOf(lowSet[i]) > -1){
      return true;
    }
    else{
      return false;
    }
  }
  
}

   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

