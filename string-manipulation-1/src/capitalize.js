/* exported capitalize */
function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

// define function with one parameter
// declare variable newWord and assign with empty string
// concatenate newWord with uppercase first letter of word
// for loop statement that initialize i with 1, reaches to length of word, and increments by 1
// newWord concatenated by lower case of word at i
// return value of newWord
