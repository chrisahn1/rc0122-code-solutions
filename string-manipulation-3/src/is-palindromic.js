/* exported isPalindromic */
function isPalindromic(string) {
  var backIndex = string.length - 1;
  var backwardString = '';

  for (var i = backIndex; i >= 0; i--) {
    if (string[i] === ' ') {
      continue;
    } else {
      backwardString += string[i];
    }
  }

  var count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }
    if (string[i] !== backwardString[count]) {
      return false;
    }
    count++;
  }
  return true;
}

// define function with 1 parameter
// declare varibles backIndex to start decrementing backwards and backwardString as empty string literal
// for loop that decrements til 0
// if string at current index is an empty whitespace, then continue
// otherwise concatenate backwardString with string at current index
// declare variable count with value 0
// for loop increments to string length
// if string at current index is a whitespace, then continue
// if string at current index is not equal to backwardString at current count, return false
// increment count
// return true
