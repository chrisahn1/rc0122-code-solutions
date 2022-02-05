/* exported pick */
function pick(source, key) {
  var obj = {};

  for (var i = 0; i < key.length; i++) {
    if (key[i] in source) {
      if (source[key[i]] === undefined) {
        continue;
      }
      obj[key[i]] = source[key[i]];
    }
  }
  return obj;
}

// define function with 2 parameters
// declare variable obj as empty object literal
// for loop iterates to key length
// if key at current index is in source, check if source's value are key at current index is equal to undefined
// continue if true
// otherwise, assign obj at kay at current index with value of source at key at current value
// return value of obj
