// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {

    // establish generatePassword function
    var generatePassword = function () {

        // prompt user for length of password
        var passwordsize = parseInt(prompt("How many characters would you like your password to contain? Choose a number between 8 and 128"));

        // if user chooses anything other than a legal number between 8 and 128, reprompt them for that
        while (Number.isNaN(passwordsize) || passwordsize < 8 || passwordsize > 128) {
            var passwordsize = parseInt(prompt("You must choose a number between 8 and 128"));
        }

        // once passwordsize is an acceptable value, set variables for four character type confirms
        var isLowerCase = confirm("Will your password include lowercase letters?");
        var isUpperCase = confirm("Will your password include uppercase letters?");
        var isNumber = confirm("Will your password include numbers?");
        var isSpecialCharacter = confirm("Will your password include any special characters?");

        // if all four confirms are false, alert user and rerun character type confirms
        while (!isLowerCase && !isUpperCase && !isNumber && !isSpecialCharacter) {
            alert("You must choose at least one type of character to generate a valid password");
            // resetting of confirm variables is not DRY, but seems unavoidable in this case
            var isLowerCase = confirm("Will your password include lowercase letters?");
            var isUpperCase = confirm("Will your password include uppercase letters?");
            var isNumber = confirm("Will your password include numbers?");
            var isSpecialCharacter = confirm("Will your password include any special characters?");
        }

        // when at least one type confirm is true, set variables for characters to be randomly selected 
        // and final password to be generated
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var specialCharacters = "!#$%&'()*+,-.]/:;<=>?@[^_`{|}~";
        var finalPassword = "";

        // run for loop to generate randomized password by selecting one character per loop from true choices
        // math elements of if statements were provided to class by instructor, then adjusted by me
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