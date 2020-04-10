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

// WHEN I click the button to generate a password 
//  prompts for password criteria:
//prompt  length of the password
  // 8 characters and no more than 128 characters

// var userLength = prompt("How long?");
// if  (userLength > 129 || userLength < 8 || isNaN(userLength)) {
//   alert("Please enter a valid number.")
// };



var lengthSelected = true;
var userLength;

while (lengthSelected) {
  userLength = prompt("How many charactes would you like in your password? You must have a minimum of 8 characters and a maximum of 128.");
  if(userLength > 129 || userLength < 8 || isNaN(userLength)) 
  {
    alert("Please enter a valid number.");
  } else {
    lengthSelected = false;
  }
}


var userLower = confirm("Do you want lowercase?");
if(userLower === true); {
  masterArray.push(lowerArray);
}

var userUpper = confirm("Do you want to use uppercase?");{
if(userUpper === true);
  masterArray.push(upperArray);
}


var userNums = confirm("Do you want to use numbers?");
if(userNums === true); {
  masterArray.push(numsArray);
}


var userSpecial = confirm("Do you want to use special characters?");
if(userSpecial === true); {
  masterArray.push(specialArray);
}


masterArray = masterArray.join('')
console.log("masterArray" + masterArray)


// Generate password length. masterArray.length tells us how many strings are in the array, math.random generates a random # which means it will be in ther length of possible characters. Generate a random index within the characters we have
var updatedPassword = [];


function generatePassword() {
  var lengthMasterArray = masterArray.length;
  console.log(lengthMasterArray);
  var index;

  //multiply by total length of the array. Math floor rounds down to make whole intergers.
  for(i = 0; i < userLength; i++) {
   index = Math.floor(Math.random() * lengthMasterArray);
   console.log("Outcome" + index);
   console.log("value" + masterArray[index]); 
  // 1st index of password, what the value will be
  // index is a random #
  updatedPassword[i] = masterArray[index]
  }
  return updatedPassword.join('');
  
  console.log("Remixed password" + updatedPassword)
}


