const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', callBack);

function callBack(err, data) {
  if (err) throw err;
  console.log(data);
}

module.exports = callBack;
