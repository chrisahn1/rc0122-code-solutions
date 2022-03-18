const fs = require('fs');
const filename = process.argv[2];

if (filename === 'cunningham.txt' || filename === 'dijkstra.txt' || filename === 'hipster-ipsum.txt' || filename === 'hopper.txt') {
  fs.readFile(filename, 'utf8', callBack);
} else {
  console.log('INVALID');
}

function callBack(err, data) {
  if (err) throw err;
  console.log(data);
}

module.exports = callBack;
