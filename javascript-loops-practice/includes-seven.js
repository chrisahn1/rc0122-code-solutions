/* exported includesSeven */
function includesSeven(array) {
  var check = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      check = true;
      break;
    }
  }
  return check;
}
