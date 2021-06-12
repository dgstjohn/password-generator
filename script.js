// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // establish generatePassword function
    var generatePassword = function () {

        // prompt user for length of password
        var passwordsize = parseInt(prompt("How many characters would you like your password to contain? Choose a numeral between 8 and 128"));

        // for next three if statements, if passwordsize value is not a number, is less than 8 or is greater than 128, alert user and restart generatePassword
        // TA recommended breaking this into three separate statements instead using of one statement with || separators (my original approach)
        if (Number.isNaN(passwordsize)) {
            alert("Your choice must be a number, between 8 and 128; please try again");
            generatePassword();
        };
        if (passwordsize < 8) {
            alert("You cannot choose a number less than 8; please try again");
            generatePassword();
        };
        if (passwordsize > 128) {
            alert("You cannot choose a number greater than 128; please try again");
            generatePassword();
        };

        // If passwordsize was legal, set variables for four type confirms
        var isLowerCase = confirm("Will your password include lowercase letters?");
        var isUpperCase = confirm("Will your password include uppercase letters?");
        var isNumber = confirm("Will your password include numbers?");
        var isSpecialCharacter = confirm("Will your password include any special characters?");

        // if all four confirms are false, alert user it and restart generatePassword
        if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialCharacter) {
            alert("You must choose at least one type of character to generate a valid password");
            generatePassword();
        }

        // If at least one confirm is legal, set variables for characters to be randomly selected and final password to be generated
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var specialCharacters = "!#$%&'()*+,-.]/:;<=>?@[^_`{|}~";
        var finalPassword = "";

        // run for loop to generate randomized password by selecting one character per loop from true choices
        // math elements of if statements were provided to class by instructor, but adjusted by me
        for (let index = 0; index < passwordsize; index++) {
            if (isLowerCase === true) {
                var randomPickLowerCase = Math.floor(Math.random() * lowercase.length);
                var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase);
                finalPassword = finalPassword + pickOneLowerCaseLetter;
            }
            if (isUpperCase === true) {
                var randomPickUpperCase = Math.floor(Math.random() * uppercase.length);
                var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase);
                finalPassword = finalPassword + pickOneUpperCaseLetter;
            }
            if (isNumber === true) {
                var randomPickNumber = Math.floor(Math.random() * numbers.length);
                var pickOneNumber = numbers.charAt(randomPickNumber);
                finalPassword = finalPassword + pickOneNumber;
            }
            if (isSpecialCharacter === true) {
                var randomPickSpecial = Math.floor(Math.random() * specialCharacters.length);
                var pickOneSpecialCharacterLetter = specialCharacters.charAt(randomPickSpecial);
                finalPassword = finalPassword + pickOneSpecialCharacterLetter;
            }
        };
        // Reduce length of finalPassword to match number length chosen by user at outset
        if (finalPassword.length > passwordsize) {
            finalPassword = finalPassword.substring(0, passwordsize);
        }
        return finalPassword;
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);