var colors = ['red', 'white', 'blue'];

console.log('colors[0]', colors[0]);
console.log('colors[1]', colors[1]);
console.log('colors[2]', colors[2]);

var usflag = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(usflag);

colors[2] = 'green';

var mexicoflag = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(mexicoflag);

console.log('array of colors: ', colors);

var students = ['Steve', 'James', 'Nick', 'Jack'];
var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is ' + lastStudent);
console.log('array of students: ', students);
