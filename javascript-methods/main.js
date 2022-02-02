var num1 = 4;
var num2 = 8;
var num3 = 2;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue: ', maximumValue);

var heroes = ['Neil Breen', 'Venom', 'Question', 'Rorschach'];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'LOTR Return of the King',
    author: 'JRR Tolkien'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    title: 'Sophie\'s World',
    author: 'Jostein Gaarder'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Chris Ahn';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
