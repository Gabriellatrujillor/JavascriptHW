# 03 JavaScript: Password Generator

[X] Array of special characters to be included in password
[X] Array of numeric characters to be included in password
[X] Array of lowercase characters to be included in password
[X] Array of uppercase characters to be included in password

[X] Function to prompt user for password options
//function getPasswordOptions()
[X] Variable to store length of password from user input
[X] Conditional statement to check if password length is a number. Prompts end if this evaluates false
[X] Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
[X] Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
[X] Variable to store boolean regarding the inclusion of special characters
[X] Variable to store boolean regarding the inclusion of numeric characters
[X] Variable to store boolean regarding the inclusion of lowercase characters
[X] Variable to store boolean regarding the inclusion of uppercase characters
[X] Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false

[X] Object to store user input

[X] Function for getting a random element from an array

[X] Function to generate password with user input

[X] Array to store types of characters to include in password
[X] Array to contain one of each type of chosen character to ensure each will be used
[X] Conditional statement that adds array of special characters into array of possible characters based on user input
[X] Push new random special character to guaranteedCharacters
[X] Conditional statement that adds array of numeric characters into array of possible characters based on user input
[X] Push new random special character to guaranteedCharacters
[x] Conditional statement that adds array of lowercase characters into array of possible characters based on user input
[x] Push new random lower-cased character to guaranteedCharacters
[x] Conditional statement that adds array of uppercase characters into array of possible characters based on user input
[x] Push new random upper-cased character to guaranteedCharacters

[x] For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable

[X] Mix in at least one of each guaranteed character in the result

[X] Transform the result into a string and pass into writePassword
//return result.join('');

[X] Get references to the #generate element

[x] Function to Write password to the #password input

[X] Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);
