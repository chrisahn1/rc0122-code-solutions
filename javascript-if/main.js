/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

isUnderFive(4);
// true
isUnderFive(10);
// false
isUnderFive(5);
// false

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(4);
// true
isEven(10);
// true
isEven(5);
// false

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

startsWithJ('JavaScript');
// true
startsWithJ('PHP');
// false
startsWithJ('HTML');
// false
startsWithJ('Java');
// true
startsWithJ('Kotlin');
// false
startsWithJ('C#');
// false

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};

isOldEnoughToDrink(bart);
// false

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};

isOldEnoughToDrive(homer);
// true

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

isOldEnoughToDrinkAndDrive(homer);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

categorizeAcidity(-1);
// "invalid pH level"
categorizeAcidity(14.0000001);
// "invalid pH level"
categorizeAcidity(7);
// "neutral"
categorizeAcidity(2);
// "acid"
categorizeAcidity(9);
// "base"

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}

introduceWarnerBro('yakko');
// "We're the warner brothers!"
introduceWarnerBro('wakko');
// "We're the warner brothers!"
introduceWarnerBro('dot');
// "I'm cute~"
introduceWarnerBro('cody');
// "Goodnight everybody!"
introduceWarnerBro('minerva');
// "Goodnight everybody!"
