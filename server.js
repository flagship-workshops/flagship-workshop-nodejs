const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./movies');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/v1/movies', async function (req, res, next) {
  res.json({ status: 'SUCCESS', movies: movies.getMovies() });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
