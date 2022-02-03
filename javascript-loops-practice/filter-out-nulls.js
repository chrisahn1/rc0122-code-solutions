/* exported filterOutNulls */
function filterOutNulls(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      continue;
    }
    arr.push(values[i]);
  }
  return arr;
}
