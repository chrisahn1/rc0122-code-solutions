const express = require('express');

const app = express();

const grades = {

};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (var key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[req.params.id] = req.params;
  res.sendStatus(201);
});
