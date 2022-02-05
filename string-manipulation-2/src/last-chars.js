/* exported lastChars */
function lastChars(length, string) {
  if (string === '' || (string.length < length)) {
    return string;
  }

  var newString = '';
  var startingIndex = string.length - length;
  for (var i = startingIndex; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}

// define function with 2 parameters
// if string is an empty string literal or string length is less than length, then return string
// declare variable newString as empty string literal
// declare variable startingIndex with value returned by expression string length minus length
// for loop iterates to string length
// return value of newString
