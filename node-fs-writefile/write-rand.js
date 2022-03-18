const fs = require('fs');
const num = Math.random().toString();

fs.writeFile('random.txt', num, 'utf8', callBack);

function callBack(err, data) {
  if (err) throw err;
}

module.exports = callBack;
