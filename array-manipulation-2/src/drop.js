/* exported drop */
function drop(array, count) {
  if (array.length === 0 || array.length < count) {
    return [];
  }
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      continue;
    }
    arr.push(array[i]);
  }
  return arr;
}

// declare function with 2 parameters
// if array is empty or array length is less than count, then return an empty array
// declare variable arr as empty array literal
// for loop iterates to array length
// if current index is less than count, then continue to next index
// otherwise, array at current index is appended to arr
// return value of arr
