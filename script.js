// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var generatePassword = function () {
        // prompt user for length of password
        var passwordsize = prompt("How many characters would you like your password to contain? Choose a numeral between 8 and 128");
        console.log(passwordsize);
        // if passwordsize value is not a number or is less than 8 or greater than 128, alert user and restart generatePassword
        if (typeof passwordsize !== "number" || passwordsize < 8 || passwordsize > 128) {
            alert = "You must choose a numeral between 8 and 128";
            generatePassword();
        }
        // for passwordsize was all true, set variables for four type confirms
        var isLowerCase = confirm("Will your password include lowercase letters?");
        var isUpperCase = confirm("Will your password include uppercase letters?");
        var isNumber = confirm("Will your password include numbers?");
        var isSpecialCharacter = confirm("Will your password include any special characters?");
        // log to console
        console.log(isLowerCase, isUpperCase, isNumber, isSpecialCharacter);
    
        // if all four confirms are false, create alert and restart generatePassword
        if (isLowerCase = false) && (isUpperCase = false) && (isNumber = false) && (isSpecialCharacter = false) {
            alert("You must choose at least one type of character to generate a valid password");
            generatePassword();
        }
    
        // otherwise, set variables for characters to be randomly selected
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var specialCharacters = "!#$%&'()*+,-.]/:;<=>?@[^_`{|}~";
        // var finalPassword = "aw" //finalPassword.length
    
        // run For loop to generate randomized password
        for (let index = 0; index < passwordsize.length; index++) {
            var finalPassword = [lowercase, uppercase, numbers, specialCharacters];
    
            if (isLowerCase = true) {
                var randomPickLowerCase = Math.floor(Math.random() * lowercase.length);
                var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase);
                finalPassword = finalPassword + pickOneLowerCaseLetter;
            }
            if (isUpperCase = true) {
                var randomPickUpperCase = Math.floor(Math.random() * uppercase.length);
                var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase);
                finalPassword = finalPassword + pickOneUpperCaseLetter;
            }
            if (isNumber) {
                var randomPickNumber = Math.floor(Math.random() * number.length);
                var pickOneNumber = number.charAt(randomPickNumber);
                finalPassword = finalPassword + pickOneNumber;
            }
            if (isSpecialCharacter = true) {
                var randomPickSpecial = Math.floor(Math.random() * specialCharacters.length);
                var pickOneSpecialCharacterLetter = specialCharcters.charAt(randomPickSpecial);
                finalPassword = finalPassword + pickOneSpecialCharacterLetter;
            }
        };
        console.log(pickOneLowerCaseLetter, pickOneUpperCaseLetter, pickOneSpecialCharacterLetter, pickOneNumber);
            return finalPassword;
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);