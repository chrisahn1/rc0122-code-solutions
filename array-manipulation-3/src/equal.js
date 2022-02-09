/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// define function with 2 parameters
// if the lengths of first and second arrays are not equal, return false
// for loop iterates to length of first
// if current index of first doesnt equal to current index of second, then return false
// return true if for loop finishes
