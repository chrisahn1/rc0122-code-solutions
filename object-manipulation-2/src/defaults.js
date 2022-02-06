/* exported defaults */
function defaults(target, source) {
  for (var keySource in source) {
    if (keySource in target) {
      continue;
    } else {
      target[keySource] = source[keySource];
    }
  }
}

// define function with 2 parameters
// for in loop iterates through source
// if keySource exists in target, then continue
// otherwise, value of source at keySource is assigned to target at keySource
