var student = {
  firstName: 'Chris',
  lastName: 'Ahn',
  age: '31'
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('fullName: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Part-time';

console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'machine',
  model: 'Blue Falcon',
  year: 2022
};

vehicle['color'] = 'Blue';
vehicle['isConvertable'] = false;

console.log('color: ', vehicle['color']);
console.log('isConvertable: ', vehicle['isConvertable']);

console.log('vehicle object: ', vehicle);

var pet = {
  name: 'Cookie',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('pet: ', pet);
