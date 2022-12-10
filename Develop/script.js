// Assignment Code
var generateBtn = document.querySelector("#generate");


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

  // 2. validate the input
  // 3. generate password
  //  a. generate a string
  //  b. print it to the screen
  //  c. the string should contain the all of the types of characters specified
  
  
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