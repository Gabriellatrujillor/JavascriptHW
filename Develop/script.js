//1. creating the arrays of lower, upper, nums, special, empty masterarray
var lowerArray = "abcdefghijklmnopqrstuvwxyz";
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numsArray = "0123456789";
var specialArray = "!#&"; 

var masterArray = [];
console.log("Lower Array" + lowerArray);
console.log("Upper Array" + upperArray);
console.log("Numbers Array" + numsArray);
console.log("Special Char" + specialArray);
console.log("Master Array" + masterArray);


var lengthSelected;
var userLength;

//creates masterarray and asks for user's length
function userPrompts() {
  lengthSelected = true;
  
  // While statement to 
while (lengthSelected) {
  userLength = prompt("How many charactes would you like in your password? You must have a minimum of 8 characters and a maximum of 128.");
  if(userLength > 129 || userLength < 8 || isNaN(userLength)) 
  {
    alert("Enter a valid number.");
  } else {
    lengthSelected = false;
  }
}
  masterArray=[];

var userLower = confirm("Do you want lowercase?");

if(userLower)
{
  masterArray.push(lowerArray);
}

var userUpper = confirm("Do you want to use uppercase?");{
if(userUpper == true)
  masterArray.push(upperArray);
}


var userNums = confirm("Do you want to use numbers?");
if(userNums == true) {
  masterArray.push(numsArray);
}


var userSpecial = confirm("Do you want to use special characters?");
if(userSpecial == true) {
  masterArray.push(specialArray);
}
console.log(masterArray)
masterArray = masterArray.join('')

//uses unique masterarray and unique length to generate password
generatePassword(masterArray, userLength);

}

// ******* Couldn't figure out closing key words for else
// / IF ALL 4 VALUES ARE FALSE
// if (
//   userLower === false &&
//   userUpper === false &&
//   userNums === false &&
//   userSpecial === false
// ) {
// alert("Choose one set of criteria.");
// else {

// }
// }


// Generate password length. masterArray.length tells us how many strings are in the array, math.random generates a random # which means it will be in ther length of possible characters. Generate a random index within the characters we have
var updatedPassword = [];

// GENERATE PASSWORD FUNCTION
function generatePassword() {
  var lengthMasterArray = masterArray.length;
  console.log(lengthMasterArray);
  var index;
  //multiply by total length of the array. Math floor rounds down to make whole intergers.
  for(i = 0; i < userLength; i++) {
   index = Math.floor(Math.random() * lengthMasterArray);
   //console.log("Outcome" + index);
  // console.log("value" + masterArray[index]);
  updatedPassword[i] = masterArray[index]
  writePassword(updatedPassword.join(''));
  }
  //console.log("Updated password" + updatedPassword)
  return updatedPassword.join("");

}
//GENERATES BUTTON THAT INPUTS PASSWORD RESULTS TO VIEW ON WEBPAGE
var generateBtn = document.querySelector("#generate");
// WRITE PASSWORD TO THE #PASSWORD INPUT
function writePassword(password) {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// GENERATE BUTTON CLICK - > USERPROMPTS
generateBtn.addEventListener("click", userPrompts);