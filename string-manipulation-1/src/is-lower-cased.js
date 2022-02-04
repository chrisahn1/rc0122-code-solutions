/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// define function with one parameter word
// for loop statement with conditional expression that reaches to length of word
// if statement with expression that check whether word at current index is lower cased or not
// if the expression is true, return false. Other return true if loop finishes all the way through
