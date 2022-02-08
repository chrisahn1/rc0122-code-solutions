/* exported unique */
function unique(array) {
  if (array === []) {
    return array;
  }
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (arr.includes(array[i])) {
      continue;
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

// define function with 1 parameter
// if array is empty, then return array
// declare arr as empty array literal
// for loop iterates to length of array
// if arr includes array at index 1, then continue
// otherwise, append array at current index to arr
// return value of arr
