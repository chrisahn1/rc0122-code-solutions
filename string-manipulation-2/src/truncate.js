/* exported truncate */
function truncate(length, string) {
  var newString = '';
  var size = string.length;
  if (size > length) {
    size = length;
  }
  for (var i = 0; i < size; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}

// define function with 2 parameters
// declare variables newString as emptry string literal and size as length of string
// if size is greater than string length, then assign length to size
// for loop iterates by size
// newString is concatenated with each character of string til size
// newString is concatenated with ...
// return value of newString
