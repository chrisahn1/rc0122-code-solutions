const express = require('express');

const app = express();

app.use(express.json());

const grades = {

};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (var key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  grades[req.params.id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
