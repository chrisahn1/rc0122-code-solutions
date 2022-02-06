/* exported titleCase */
function titleCase(title) {
  var conjunctions = ['and', 'or', 'nor', 'but'];
  var articles = ['a', 'an', 'the'];
  var prepositions = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var arr = title.split(' ');
  var newTitle = '';

  var semicolon = false;
  var beginning = true;
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    var tempString = '';
    if (arr[i].toLowerCase() === 'javascript') {
      newTitle += 'JavaScript';
    } else if (arr[i].toLowerCase() === 'javascript:') {
      newTitle += 'JavaScript:';
      semicolon = true;
    } else if (arr[i].toLowerCase() === 'api') {
      newTitle += 'API';
    } else if (arr[i].toLowerCase() === 'api:') {
      newTitle += 'API:';
      semicolon = true;
    } else if (conjunctions.includes(arr[i].toLowerCase())) {
      if (beginning === true) {
        tempString += arr[i][0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        beginning = false;
      } else if (semicolon === true) {
        tempString += arr[i][0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        semicolon = false;
      } else {
        for (n = 0; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
      }
    } else if (articles.includes(arr[i].toLowerCase())) {
      if (beginning === true) {
        tempString += arr[i][0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        beginning = false;
      } else if (semicolon === true) {
        tempString += arr[i][0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        semicolon = false;
      } else {
        for (n = 0; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
      }
    } else if (prepositions.includes(arr[i].toLowerCase())) {
      if (beginning === true) {
        tempString += arr[i][0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        beginning = false;
      } else if (semicolon === true) {
        tempString += arr[0].toUpperCase();
        for (n = 1; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
        semicolon = false;
      } else {
        for (n = 0; n < arr[i].length; n++) {
          tempString += arr[i][n].toLowerCase();
        }
        newTitle += tempString;
      }
    } else {
      tempString += arr[i][0].toUpperCase();
      var previousChar = arr[i][0];
      for (n = 1; n < arr[i].length; n++) {
        if (previousChar === '-') {
          tempString += arr[i][n].toUpperCase();
        } else {
          tempString += arr[i][n].toLowerCase();
        }
        previousChar = arr[i][n];
      }
      newTitle += tempString;
      if (arr[i][arr[i].length - 1] === ':') {
        semicolon = true;
      }
    }
    beginning = false;
    if ((i + 1) === arr.length) {
      continue;
    } else {
      newTitle += ' ';
    }

  }
  return newTitle;
}

// define function with 1 parameter
// declare variables conjunctions, articles and prepositions as array literals with each containing lists
// declare variable arr as array literal with value returned by title split by white space
// declare variable newTitle as empty string literal
// declare variable semicolon and beginnning as booleans to check for state of title
// declare variable n as 0 for the inner for loops

// first for loop:
// iterates through length of arr

// the first 4 if and else-if statements checks if current word is javascript or api also counting for semicolon
// concatenates to newTitle according to rules

// the next 3 else-if statements checks if current word is either conjunctions, articles or prepositions
// within each of the 3 else-if statements, use if-else statements to first check if the word is at the beginning or a semicolon..
// ..was present from the previous word.
// capitalize if true and then concatenate the rest of the chars in lower case.
// otherwise, lowercase all chars when they concatenate to newTitle with for loop

// the last else statement is if the current word is just a regular word
// if it's the first word of the title or a semicolon or a '-' existed from the previous char,..
// ..then capitalize the first char of the current word and concatenate the rest of the chars as lower case with a for loop

// return value of newTitle
