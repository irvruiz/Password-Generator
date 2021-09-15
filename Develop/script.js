// used to select "generate password" button
var generateBtn = document.querySelector("#generate");

// input number variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var minLength = 8;
var maxLength = 128;

function generatePassword(){
  
  // key variables,
  var newPassword = [];
  var potentialCharacters = [];
  
  // password max limit length and minimum length, with prompt command for user desired length  
  var passwordLength = prompt("Input a number from." + minLength + " To " + maxLength + "To elect the number of characters.");
  
  // "if" statement to rule out passwords that are too short, long or nothing is entered
  if(passwordLength < 8 || passwordLength > 128 || passwordLength==="" || passwordLength===NaN){
    alert("Select a number from 8 to 128 to continue.");
    return;
  }
  
  // variables for booleans to confirm statements to reference
  var useNumbers=confirm("If you want to use numbers in your password click 'OK.'");
  var useSpecialCharacters=confirm("If you want to use special characters in your password click 'OK.'");
  var useLowerCase=confirm("If you want to use lower case letters in your password click 'OK.'");
  var useUpperCase=confirm("If you want to use upper case letters in your password click 'OK.'");
  
  // "if" statement to input data for potential password when user cicks "OK"
  if(!useNumbers && !useSpecialCharacters && !useUpperCase && !useLowerCase) {
    // if user selects "cancel" on all options this will pop up
    alert("Select at least one option.");
    return;
  };
  // "if" statements to input data for potential password when user clicks "OK."
  if(useNumbers===true){
    newPassword.push(getRandomCharacter(numbers));
    potentialCharacters=potentialCharacters.concat(numbers);
  };
  if(useSpecialCharacters===true){
    newPassword.push(getRandomCharacter(specialCharacters));
    potentialCharacters=potentialCharacters.concat(specialCharacters);
  };
  if(useLowerCase===true){
    newPassword.push(getRandomCharacter(lowerCase));
    potentialCharacters=potentialCharacters.concat(lowerCase);
  };
  if(useUpperCase===true){
    newPassword.push(getRandomCharacter(upperCase));
    potentialCharacters=potentialCharacters.concat(upperCase);
  };
  // Variable to help make up the remaining length of the password.
  var remainingLength = passwordLength-newPassword.length;

  // "for" loop is set so that it adds a random character from the "newPassword" array as many times as the "remainingLength" variable tells it until the password length is reached.
  for (let i = 0; i < remainingLength; i++) {
    newPassword.push(getRandomCharacter(potentialCharacters))
  }; 
  //Used join keyword to convert "newPassword" from an array to a string.
  return newPassword.join(''); 
};

// Created function to get random characters.
function getRandomCharacter(array) {
  var randomCharacter=array[Math.floor(Math.random()*array.length)];
  return randomCharacter;
};

// Write password written to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener added to generate button.
generateBtn.addEventListener("click", writePassword);