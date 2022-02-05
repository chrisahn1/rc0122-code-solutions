/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0 || array.length < count) {
    return array;
  }
  var arr = [];
  var startingIndex = array.length - count;

  for (var i = startingIndex; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define funciton with 2 parameters
// if array is empty or array length is less than count, then return array
// declare variable arr as empty array literal
// declare variable startingIndex with value from expression array length minus count
// for loop initializes with startingIndex and iterates to array length
// array at current index appends to arr
// return value of arr
