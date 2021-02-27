const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const movies = require('./movies');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', async function(req, res, next) {
  res.json({ status: 'SUCCESS', message: 'I\'m Alive!' });
})

app.get('/api/v1/movies/:email', async function (req, res, next) {
  res.json({ status: 'SUCCESS', movies: movies.usaMovies });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
