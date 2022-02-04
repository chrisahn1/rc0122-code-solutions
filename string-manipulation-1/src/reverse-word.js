/* exported reverseWord */
function reverseWord(word) {
  var reverseWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

// define funciton with one parameter
// declare variable as empty string
// for loop that decrements from length of word to 0
// concatenate reverseWord with word at current index
// return value of reverseWord
