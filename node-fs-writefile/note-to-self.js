const data = new Uint8Array(Buffer.from(process.argv[2]));

const fs = require('fs');

fs.writeFile('../rc0122-code-solutions/node-fs-writefile/note.txt', data, callBack);

function callBack(err, data) {
  if (err) throw err;
}

module.exports = callBack;
