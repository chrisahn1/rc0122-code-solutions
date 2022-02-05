/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// define function with 1 parameter
// declare variable count with value 0 and vowels as array literal containing lowercased vowels
// for loop iterates to string length
// if vowels array includes the lowercased string at current index, then increment count
// return value of count
