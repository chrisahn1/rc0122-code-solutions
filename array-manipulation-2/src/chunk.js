/* exported chunk */
function chunk(array, size) {
  if (array.length === 0 || array.length < size) {
    return array;
  }
  var arr = [];
  var tempArr = [];
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (count < size) {
      tempArr.push(array[i]);
      count++;
    } else {
      arr.push(tempArr);
      tempArr = [];
      tempArr.push(array[i]);
      count = 1;
    }
  }
  arr.push(tempArr);
  return arr;
}

// define function with 2 parameters
// if array is empty or array length is less tha size, then return array
// declare variables arr and tempArr as empty arrays and count as 0;
// count keeps track of size for tempArr
// for loop iterates to array length
// if count is less than size, array at index is appended to tempArr and increment count
// otherwise, tempArr is appended to arr and tempArr is emptied and appended with array at current index
// count is assigned with 1
// append remaining tempArr to arr
// return value of arr
