/* exported flatten */
function flatten(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var n = 0; n < array[i].length; n++) {
        arr.push(array[i][n]);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

// define function with 1 parameter
// declare varibale arr as empty array literal
// for loop iterates to array length
// if array at current index is an array, then use for loop to iterate through array at current n index...
// ...and append it to arr
// otherwise, array at current i index
// return value of arr
