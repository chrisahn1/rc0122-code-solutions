var arr = [
  {
    isbn: '12345',
    title: 'Sophies World',
    author: 'Jostein Gaarder'
  },
  {
    isbn: '67891',
    title: 'LOTR',
    author: 'JRR Tolkien'
  },
  {
    isbn: '54321',
    title: 'Animal Farm',
    author: 'George Orwell'
  }
];

console.log('array of books: ', arr);
console.log('typeof array of books: ', typeof arr);

var newArr = JSON.stringify(arr);

console.log('stringified array of books: ', newArr);
console.log('typeof stringified array of books: ', typeof newArr);

var student = '{"id": 4321, "name": "Chris Ahn"}';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var studentParse = JSON.parse(student);

console.log('student parse: ', studentParse);
console.log('typeof student parse: ', typeof studentParse);
