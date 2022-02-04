/* exported reverse */
function reverse(array) {
  if (array === []) {
    return array;
  }
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}

// define function with one parameter
// if array is empty then return array
// declare arr as an empty array literal
// for loop that initializes with length of array minus 1 and decrements to 0
// array at current index appends to arr
// return value of arr
