const input = process.argv[2].toString();

const fs = require('fs');

fs.writeFile('note.txt', input, 'utf8', callBack);

function callBack(err, data) {
  if (err) throw err;
}

module.exports = callBack;
