/* exported tail */
function tail(array) {
  if (array === []) {
    return array;
  }
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define function with one parameter array
// if array is empty, then return array
// declare arr as empty array literal
// for loop that initializes i with 1 and iterates to length of array
// array at current index is appended to arr
// return value of arr
