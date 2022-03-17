const fs = require('fs');

fs.readFile('../rc0122-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', callBack);

function callBack(err, data) {
  if (err) throw err;
  console.log(data);
}
