function convertMinutesToSeconds(minutes) {
  return 60 * minutes;
}

var minutestoseconds = convertMinutesToSeconds(5);

console.log('convertMinutesToSeconds(5): ', minutestoseconds);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Beavis');

console.log('greet(name): ', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);

console.log('getArea(17, 42): ', area);

function getFirstName(person) {
  return person.firstName;
}

var firstname = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstName({ firstName: \'Lelouche\', lastName: \'Lamperouge\' }): ', firstname);

function getLastElement(arr) {
  return arr[arr.length - 1];
}

var lastarr = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElement([\'propane\', \'and\', \'propane\', \'accessories\']): ', lastarr);
