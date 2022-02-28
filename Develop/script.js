// Assignment code here

// character types
var getUpperCase = function() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

var getLowerCase = function() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

var getNumber = function() {
  var number = "0123456789"
  return number[Math.floor(Math.random() * number.length)];
}

var getSpecialChar = function() {
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}



// chooses password length
var passwordLength = function() {
  var promptLength = window.prompt("Choose a password length between 8 and 120 characters.");

  promptLength = parseInt(promptLength);

  if (!promptLength || promptLength < 8 || promptLength > 120) {
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordLength();
  }

    var confirmLowerCase = window.confirm("Do you want lower case letters in your password?");
    var confirmUpperCase = window.confirm("Do you want upper case letters in your password?");
    var confirmNumbers = window.confirm("Do you want numbers in your password?");
    var confirmSpecialChar = window.confirm("Do you want special characters in your password?");

    if (!confirmLowerCase && !confirmNumbers && !confirmSpecialChar && !confirmUpperCase) {
      window.alert("You need to have at lease one character type selected. Please choose at lease one.");
      return passwordLength();
    }

    // window.alert("Combine all parts to get your password.");

    if (confirmLowerCase && !confirmNumbers && !confirmSpecialChar && !confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength; i > 0; i--) {
        window.alert(getLowerCase());
      }
   }

   if (confirmLowerCase && confirmNumbers && !confirmSpecialChar && !confirmUpperCase) {
    // var passwordText = document.querySelector("#password");
    for (var i = promptLength / 2; i > 0; i--) {
      window.alert(getLowerCase() + getNumber());
    }

    if (confirmLowerCase && !confirmNumbers && confirmSpecialChar && !confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 2; i > 0; i--) {
        window.alert(getLowerCase() + getSpecialChar());
      }
    }

    if (confirmLowerCase && !confirmNumbers && !confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 2; i > 0; i--) {
        window.alert(getLowerCase() + getUpperCase());
      }
    }

    if (!confirmLowerCase && confirmNumbers && confirmSpecialChar && !confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 2; i > 0; i--) {
        window.alert(getNumber() + getSpecialChar());
      }
    }

    if (!confirmLowerCase && confirmNumbers && !confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 2; i > 0; i--) {
        window.alert(getNumber() + getUpperCase());
      }
    }

    if (!confirmLowerCase && !confirmNumbers && confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 2; i > 0; i--) {
        window.alert(getUpperCase() + getSpecialChar());
      }
    }

    if (confirmLowerCase && confirmNumbers && confirmSpecialChar && !confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 3; i > 0; i--) {
        window.alert(getLowerCase() + getNumber() + getSpecialChar());
      }
    }

    if (confirmLowerCase && !confirmNumbers && confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 3; i > 0; i--) {
        window.alert(getLowerCase() + getUpperCase() + getSpecialChar());
      }
    }

    if (confirmLowerCase && confirmNumbers && !confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 3; i > 0; i--) {
        window.alert(getLowerCase() + getNumber() + getUpperCase());
      }
    }

    if (!confirmLowerCase && confirmNumbers && confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 3; i > 0; i--) {
        window.alert(getSpecialChar() + getNumber() + getUpperCase());
      }
    }

    if (confirmLowerCase && confirmNumbers && confirmSpecialChar && confirmUpperCase) {
      // var passwordText = document.querySelector("#password");
      for (var i = promptLength / 4; i > 0; i--) {
        window.alert(getLowerCase() + getNumber() + getSpecialChar() + getUpperCase());
      }
    }
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  passwordLength();
  
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
