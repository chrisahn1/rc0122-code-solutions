/* exported isVowel */
function isVowel(char) {
  var arr = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < arr.length; i++) {
    if ((char === arr[i].toLowerCase()) || char === arr[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

// define funciton with one parameter char
// declare arr that contains list of lower cased vowel chars
// for loop statement that iterates through arr
// if statement that checks if char equals to either lower or upper case of arr at current index
// if true then return true. Otherwise return false if for loops finishes iterating all of arr
