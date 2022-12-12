// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ":", ";", ".", ",", "?"];
let randomPassword = "";

function generatePassword() {
 
  console.log("Button Clicked")
  

  // 1. prompt the user for password criteria
  //  a. password length between 8 and 128
  //  b. lowercase, uppercase, number, special characters

  var sign = prompt("Choose a password length between 8 and 128 characters.");
  
  if (sign > 7 && sign < 129){
    console.log("true")
  } else {
    alert("You must choose a number between 8 and 128.")
    return
  }
  
  let resultLower = confirm("Click OK to include lowercase letters in your password.");
  let resultUpper = confirm("Click OK to include uppercase letters in your password.");
  let resultNumber = confirm("Click OK to include numbers in your password.");
  let resultSpecial = confirm("Click OK to include special characters in your password.");

  randomPassword = "";

 //3. generate password

 //  functions to generate random character
  function ranLowercase() {
    let ranLowercase = lowercase[Math.floor(Math.random() * lowercase.length)]
    return ranLowercase;
  }

  ranLowercase();

  function ranUppercase() {
    let ranUppercase = uppercase[Math.floor(Math.random() * uppercase.length)]
    return ranUppercase;
  }

  ranUppercase();

  function ranNumber() {
    let ranNumber = number[Math.floor(Math.random() * number.length)]
    return ranNumber;
  }

  ranNumber();

  function ranSpecial() {
    let ranSpecial = special[Math.floor(Math.random() * special.length)]
    return ranSpecial;
  }

  ranSpecial();

  var randomCharList = [];

  

  //2. validate the input

  if(resultLower){
    console.log(resultLower);
    randomCharList.concat(lowercase);
  }
 
  if(resultUpper){
    randomCharList.concat(uppercase)
  }
  
  if(resultNumber){
    randomCharList.concat(number)
  }
  
  if(resultSpecial){
    randomCharList.concat(special)
  }
  
  console.log(randomCharList);


  // generateRandomPassword = grab randomPassword items = to the number from the input
  //for loop for each random character
  for(var i = 0; i < sign; i++){
  
  
  var randomPasswordChar = randomCharList[Math.floor(Math.random() * randomCharList.length)]
  randomPassword = randomPassword + randomPasswordChar;
  console.log(randomPassword);
  }
  
  
  
  // 4. display the password on the page
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword)