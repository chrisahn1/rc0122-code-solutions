/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// define function with 2 parameters
// for loop iterates to array length
// if array at current index equals to value, return true
// return false if for loop finishes without returning true
