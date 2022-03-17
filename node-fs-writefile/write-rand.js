const data = new Uint8Array(Buffer.from(Math.random().toString()));

const fs = require('fs');

fs.writeFile('../rc0122-code-solutions/node-fs-writefile/random.txt', data, callBack);

function callBack(err, data) {
  if (err) throw err;
}

module.exports = callBack;
