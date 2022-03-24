const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (var key in data.notes) {
    arr.push(data.notes[key]);
  }
  res.json(arr);

});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) && typeof data.notes[id] === 'undefined') {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else if (Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    res.json(data.notes[id]);
  }

});

app.post('/api/notes', (req, res) => {
  const newContent = req.body;

  if (typeof newContent === 'undefined') {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  const newNote = {
    id: data.nextId,
    content: newContent.content
  };
  data.notes[newNote.id] = newNote;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred' });
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isInteger(id) && typeof data.notes[id] === 'undefined') {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  } else if (Number.isInteger(id) === false) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else {
    delete data.notes[id];
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', json, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const currentid = Number(req.params.id);

  if (Number.isInteger(currentid) && typeof data.notes[currentid] === 'undefined') {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  } else if (Number.isInteger(currentid) === false) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else {
    const newContent = req.body;
    const newNote = {
      id: currentid,
      content: newContent.content
    };
    data.notes[currentid] = newNote;

    const json = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', json, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
