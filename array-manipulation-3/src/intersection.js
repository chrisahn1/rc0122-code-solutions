/* exported intersection */
function intersection(first, second) {
  var arr = [];
  var smallestArr = [];
  var largestArr = [];
  var size = 0;

  if (first.length < second.length) {
    size = second.length;
    smallestArr = first;
    largestArr = second;
  } else {
    size = first.length;
    smallestArr = second;
    largestArr = first;
  }
  for (var i = 0; i < size; i++) {
    if (smallestArr.includes(largestArr[i])) {
      arr.push(largestArr[i]);
    }
  }
  return arr;
}

// define function with 1 parameter
// declare arr as empty array literal
// declare variable smallestArr and largestArr as empty array literals
// declare size as number variable 0
// if first length is less than second length, then assign size as length of second, ...
// .. smallestArr as first, and largestArr as second
// otherwise, do the reverse

// for loop iterates to length of size
// if smallestArr includes largestArr at current index, then append largestArr at current index to arr

// return value of arr
