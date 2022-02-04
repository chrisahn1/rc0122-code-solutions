/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
}

// define function with 1 parameter
// assign empty array literal to variable arr
// for in loop that iterates key of object
// object at key is appended to arr
// return value of arr
