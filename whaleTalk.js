/* This is a silly program created as part of the loop lesson of Codecademy's Learn JavaScript cirriculum.

The object is to translate an inputted text into 'Whale Talk.' The rules are that there are no consonants and u's and e's must be extra long (doubled) */


var input = 'Whales are mammals, not fish'; //Text to be translated

const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

//Loop pulls vowels from input text and places in resultArray
for (let i = 0; i < input.length; i++) {
  for(let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels [j]) {
      //Doubles e's and u's:
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]); 
        } 
      resultArray.push(input[i]);
    }
  }
}
//Converts the resultArray to upper case string
var resultString = resultArray.join('').toUpperCase();
//Prints to console 
console.log(resultString);