/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0 || array.length < count) {
    return [];
  }
  var arr = [];
  var lastIndex = array.length - count;
  for (var i = 0; i < lastIndex; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define funciton with 2 parameters
// if array is empty or array length is less than count, then return []
// declare variable arr as empty array literal
// declare variable lastIndex with value from expression array length minus count
// for loop iterates to lastIndex
// array at current index appends to arr
// return value of arr
