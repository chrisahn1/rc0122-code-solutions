/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// define funciton with one parameter word
// for loop statement with condition that reaches to length of word
// if statement with expression that checks if the current letter is upper cased or not
// if the expression is true, return false. Otherwise return true if loop ends all the way through
