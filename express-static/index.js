const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');

const staticExpress = express.static(joinedPath);

app.use(staticExpress);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
