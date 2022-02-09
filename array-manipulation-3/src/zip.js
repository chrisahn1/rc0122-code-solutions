/* exported zip */
function zip(first, second) {
  var arr = [];
  var size = 0;

  if (first.length < second.length) {
    size = first.length;
  } else {
    size = second.length;
  }

  for (var i = 0; i < size; i++) {
    var tempArr = [];
    tempArr.push(first[i]);
    tempArr.push(second[i]);
    arr.push(tempArr);
  }
  return arr;
}

// define function with 2 parameters
// declare variables arr as empty array literal and size as number value 0
// if first length is less than second length, then assign size with value of first length
// otherwise, assign size with value second length
// for loop iterates to size
// declare variable tempArr as empty array literal
// append first and second at current i index to tempArr
// append tempArr to arr
// return value of arr
