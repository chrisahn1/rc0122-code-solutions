/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false) {
      continue;
    } else if (typeof array[i] === 'object') {
      if (array[i] === null && array[i] !== undefined) {
        continue;
      } else {
        arr.push(array[i]);
      }
    } else if (array[i] === '') {
      continue;
    } else if (array[i] === null) {
      continue;
    } else if (typeof array[i] === 'undefined') {
      continue;
    } else if (array[i] === 0) {
      continue;
    } else if ((isNaN(array[i])) && (typeof array[i] !== 'string')) {
      continue;
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

// define function with one parameter
// declare empty array literal arr
// for loop that iterates array
// if array at current index is false, null and not undefined, empty string,
// null, undefined, 0, or is not a number and not a string, then continue.
// otherwise, array at current index is appended to arr
// return value of arr
