/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstArr = [];
  var secondArr = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] === ' ') {
      continue;
    }
    firstArr.push(firstString[i]);
  }
  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] === ' ') {
      continue;
    }
    secondArr.push(secondString[i]);
  }
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (var n = 0; n < firstArr.length; n++) {
    for (i = 0; i < secondArr.length; i++) {
      if (firstArr[n] === secondArr[i]) {
        secondArr.splice(i, 1);
        break;
      }
    }
  }
  if (secondArr.length === 0) {
    return true;
  } else {
    return false;
  }
}

// define function with 2 parameters
// declare variables firstArr and secondArr as array empty literals
// for loop appends all characters except white space to from firstString to firstArr
// for loop appends all characters except white space to from secondString to secondArr
// if lengths for firstArr and secondArr are not the same, then return false
// for loop increments through length of firstArr
// another for loop inside that increments through secondArr
// if firstArr at n index is equal to secondArr at i index, then splice secondArr from i index and 1 element

// if secondArr length is 0, then return true
// otherwise, return false
