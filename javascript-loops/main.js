/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

getNumbersToTen();

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

getEvenNumbersToTwenty();

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

repeatWord('Hello', 6);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('Hello');
logEachCharacter('World');

function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

doubleAll([3, 2, 6, 9]);
doubleAll([78, 21, 45, 18]);

function getKeys(object) {
  var keys = [];

  for (var x in object) {
    keys.push(x);
  }
  return keys;
}

getKeys({ firstName: 'Chris', lastName: 'Ahn' });
getKeys({ vehicle: 'boat', year: '2022' });
getKeys({ job: 'student', language: 'Javascript' });

function getValues(object) {
  var values = [];

  for (var x in object) {
    values.push(object[x]);
  }
  return values;
}

getValues({ firstName: 'Chris', lastName: 'Ahn' });
getValues({ vehicle: 'boat', year: '2022' });
getValues({ job: 'student', language: 'Javascript' });
