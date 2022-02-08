/* exported difference */
function difference(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      arr.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      arr.push(second[i]);
    }
  }
  return arr;
}

// define function with 1 parameter
// declare arr as empty array literal
// for loop iterates to length of first
// if second includes first at current index, then continue
// otherwise, append first at current index to arr
// for loop iterates to length of second
// if first includes second at current index, then continue
// otherwise, append second at current index to arr
// return value of arr
