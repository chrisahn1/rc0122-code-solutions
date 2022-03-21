const express = require('./node_modules/express');

const obj = express();
obj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
