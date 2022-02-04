/* exported initial */
function initial(array) {
  if (array === []) {
    return array;
  }
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define function with one parameter
// if array is empty then return array
// declare arr as empty array literal
// for loop that increments to length of array minus 1
// array at current index appended to arr
// return value of arr
