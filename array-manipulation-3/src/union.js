/* exported union */
function union(first, second) {
  var arr = [];

  for (var i = 0; i < first.length; i++) {
    if (arr.includes(first[i])) {
      continue;
    } else {
      arr.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (arr.includes(second[i])) {
      continue;
    } else {
      arr.push(second[i]);
    }
  }
  return arr;
}

// define function with 2 parameters
// declare arr as empty array literal

// for loop iterates to length of first
// if arr includes first at current index, then continue
// otherwise, append first at current index to arr

// for loop iterates to length of second
// if arr includes second at current index, then continue
// otherwise, append second at current index to arr

// return value of arr
