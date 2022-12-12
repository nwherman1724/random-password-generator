// Assignment Code

// decalring global functions
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ":", ";", ".", ",", "?"];
let randomPassword = "";

function generatePassword() {

  //Asks for inputs
  var sign = prompt("Choose a password length between 8 and 128 characters.");
  
  //Handles numbes out of bounds requires correct input
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

  //Resets passwords back to and empty string
  randomPassword = "";

 //3. generate password

 //creates empty array and adds all possibly characters inside of it
  var randomCharList = [];
  var randomCharList = randomCharList.concat(lowercase, uppercase, number, special);

  //2. validate the input

  //Removes lowercase, uppercase, number, special when cancel is clicked on the confirm popup
  if(!resultLower){
    var splicedLowercase = randomCharList.splice(0,26);
  }
  
  if(!resultUpper){
    var splicedLowercase = randomCharList.splice(26,26);
  }
  
  if(!resultNumber){
    var splicedLowercase = randomCharList.splice(52,10);
  }
  
  if(!resultSpecial){
    var splicedLowercase = randomCharList.splice(62,20);
  }

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