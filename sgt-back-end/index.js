const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!name || !course || !score) {
    res.status(400).json({
      error: '"name", "course", and/or "score" are invalid'
    });
    return;
  }

  if (score < 0 || Number.isInteger(score) === false) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const [grades] = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!id || id < 0) {
    res.status(400).json({
      error: '"gradeId" is invalid'
    });
    return;
  }

  if (!name || !course || !score) {
    res.status(400).json({
      error: '"name", "course", and/or "score" are invalid'
    });
    return;
  }

  if (score < 0 || Number.isInteger(score) === false) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
    return;
  }

  const sql = `
    update "grades"
    set "name" = $1, "course" = $2, "score" = $3
    where "gradeId" = $4
    returning *
  `;

  const params = [name, course, score, id];
  db.query(sql, params)
    .then(result => {
      const [grades] = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'grade does not exist'
        });
      } else {
        res.status(200).json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);

  if (!id || id < 0) {
    res.status(400).json({
      error: '"gradeId" is invalid'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [id];
  db.query(sql, params)
    .then(result => {
      const [grades] = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'grade does not exist'
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
