/* exported take */
function take(array, count) {
  if (array.length === 0 || array.length < count) {
    return array;
  }
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define function with 2 parameters
// if array is empty or array length is less than count, then return array
// declare variable arr as empty array literal
// for loop iterates to count
// array at current index is appended to arr
// return value of arr
