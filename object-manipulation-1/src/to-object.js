/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// define funciton with 1 parameter
// assign empty obj literal to variable obj
// assign keyValuePair at 1 index to obj at keyValuePair at index 0
// return value of obj
