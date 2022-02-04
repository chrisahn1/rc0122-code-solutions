/* exported getWords */
function getWords(string) {
  var arr = [];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      arr.push(newString);
      newString = '';
    } else {
      newString += string[i];
    }
  }
  if (newString === '') {
    return [];
  } else {
    arr.push(newString);
    return arr;
  }
}

// define function with one parameter string
// declare empty array and empty string
// for loop statement that iterates to length of string
// if string at current index is an white space, then push newString to arr and assign newString as empty string
// else concatenate newString with string at current index
// if newString is empty, return an empty array
// else push remaining newString into arr and return arr
