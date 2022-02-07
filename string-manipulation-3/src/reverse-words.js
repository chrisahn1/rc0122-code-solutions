/* exported reverseWords */
function reverseWords(string) {
  var arr = string.split(' ');
  var reverseString = '';

  for (var i = 0; i < arr.length; i++) {
    for (var n = arr[i].length - 1; n >= 0; n--) {
      reverseString += arr[i][n];
    }
    if ((i + 1) === arr.length) {
      continue;
    } else {
      reverseString += ' ';
    }
  }
  return reverseString;
}

// define function with 1 parameter
// declare variable arr as array from string with property split called with 1 argument whitespace
// declare variable reverseString as empty string literal
// for loop increments to length of arr
// within is another for loop which decrements from initialization of length of arr at current index til 0
// reverseString is concatenated with arr at index i and at index n
// after second for loop is done executing, if i index reaches to the end of arr length, then continue
// otherwise, concatenate reverseString with whitespace since arr at index i is a word
// return value of reverseString
