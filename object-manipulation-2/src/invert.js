/* exported invert */
function invert(source, key) {
  if (source === {}) {
    return source;
  }
  var obj = {};

  for (var objKey in source) {
    obj[source[objKey]] = objKey;
  }
  return obj;
}

// define function with 2 parameters
// if source is empty then return source
// declare variable obj as empty obj literal
// for in loop iterating thorugh source
// objKey is assign to obj at value of source at objKey
// return value of obj
