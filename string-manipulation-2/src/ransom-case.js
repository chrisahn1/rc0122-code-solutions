/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

// define funciton with 1 parameter
// declare variable newString as empty string literal
// for loop iterates to length of string
// if index is divisible by 2, then concatenate newString with lowercased string at current index
// otherwise, concatenate newString with uppercased string at current index
// return value of newString
