/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
}

// define function with 1 parameter
// assign empty array literal to variable arr
// for in loop statement that iterates key in object
// key is appended to arr
// return value of arr
