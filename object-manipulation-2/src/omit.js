/* exported omit */
function omit(source, key) {
  if (source === {}) {
    return source;
  }
  var obj = {};

  for (var objKey in source) {
    if (key.includes(objKey)) {
      continue;
    } else {
      obj[objKey] = source[objKey];
    }
  }
  return obj;
}

// define function with 2 parameters
// if source is empty, then return source
// declare variable obj as empty object literal
// for in loop iterates from source
// if key array includes objKey, then continue
// otherwise, assign obj at objKey with value of source at objKey
// return value of obj
