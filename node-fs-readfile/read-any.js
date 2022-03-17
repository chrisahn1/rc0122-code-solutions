const filename = process.argv[2];

const fs = require('fs');

if (filename === 'cunningham.txt') {
  fs.readFile(`../rc0122-code-solutions/node-fs-readfile/${filename}`, 'utf8', callBack);
} else if (filename === 'dijkstra.txt') {
  fs.readFile(`../rc0122-code-solutions/node-fs-readfile/${filename}`, 'utf8', callBack);
} else if (filename === 'hipster-ipsum.txt') {
  fs.readFile(`../rc0122-code-solutions/node-fs-readfile/${filename}`, 'utf8', callBack);
} else if (filename === 'hopper.txt') {
  fs.readFile(`../rc0122-code-solutions/node-fs-readfile/${filename}`, 'utf8', callBack);
} else {
  console.log('INVALID');
}

function callBack(err, data) {
  if (err) throw err;
  console.log(data);
}

module.exports = callBack;
