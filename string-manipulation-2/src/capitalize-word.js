/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  newString += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString += word[i].toLowerCase();
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}

// define function with 1 parameter
// declare variable newString as empty string literal
// concatenate newString with capitalized word at 0 index
// for loop initializes at 1 and iterates to word length
// newString concatenates with lowercased word at current index
// if newString equals to 'Javascript', then assign newStirng with JavaScript
// return value of newString
