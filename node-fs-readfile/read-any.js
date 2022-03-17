const fs = require('fs');
const filename = process.argv[2];

if (filename === 'cunningham.txt') {
  fs.readFile(filename, 'utf8', callBack);
} else if (filename === 'dijkstra.txt') {
  fs.readFile(filename, 'utf8', callBack);
} else if (filename === 'hipster-ipsum.txt') {
  fs.readFile(filename, 'utf8', callBack);
} else if (filename === 'hopper.txt') {
  fs.readFile(filename, 'utf8', callBack);
} else {
  console.log('INVALID');
}

function callBack(err, data) {
  if (err) throw err;
  console.log(data);
}

module.exports = callBack;
