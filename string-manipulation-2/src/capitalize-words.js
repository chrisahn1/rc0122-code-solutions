/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = string[0].toUpperCase();
  var previous = string[0];

  for (var i = 1; i < string.length; i++) {
    if (previous === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
    previous = string[i];
  }
  return newString;
}

// define function with 1 parameter
// declare variables newString with Uppercased string at 0 index and previous as string at 0 index
// for loop interates to length of string
// if previous character is a white space, then concatenate newString with uppercase string at current index
// otherwise, concatenate with lowercase string at current index
// assign previous with string at current index
// return value of newString
