/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// define function with 3 parameters
// declare varibale newString as empty string literal
// for loop iterates to string length
// if current index equals to firstIndex, concatenate newString with string at secondIndex
// else if current index equals to secondIndex, concatenate newString with string at firstIndex
// else concatenate with string at current index
// return value of newString
