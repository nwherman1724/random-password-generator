// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ":", ";", ".", ",", "?"];
var randomPassword = [lowercase, uppercase, number, special];

function generatePassword() {
  console.log("Button Clicked")

  // 1. prompt the user for password criteria
  //  a. password length between 8 and 128
  //  b. lowercase, uppercase, number, special characters

  var sign = prompt("Choose a password length between 8 and 128 characters.");
  let resultLower = confirm("Click OK to include lowercase letters in your password.");
  let resultUpper = confirm("Click OK to include uppercase letters in your password.");
  let resultNumber = confirm("Click OK to include numbers in your password.");
  let resultSpecial = confirm("Click OK to include special characters in your password.");

  console.log(sign)
  console.log(resultLower)
  console.log(resultUpper)
  console.log(resultNumber)
  console.log(resultSpecial)


  // password = a random lowercase letter + a randome uppercase letter + a random number + a random symbol
  password = lowercase[Math.floor(Math.random() * lowercase.length)] + uppercase[Math.floor(Math.random() * uppercase.length)] + number[Math.floor(Math.random() * number.length)] + special[Math.floor(Math.random() * special.length)]

  console.log(password);

  randomLowercase = 

  // generateRandomPassword = grab randomPassword items = to the number from the input

  for loop for each random character

  // 2. validate the input
  // 3. generate password
  let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
  //  a. generate a string
  //  b. print it to the screen
  //  c. the string should contain the all of the types of characters specified
  

  //if resultLower = fasle then generate password excludes lowercase letters

  //gerneratePassword = lowercase + uppercase + Symbols + number
  
  // 4. display the password on the page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);