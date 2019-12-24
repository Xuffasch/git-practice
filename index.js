const PORT = 3000;

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var logger = require('morgan');
app.use(logger('dev'));

app.route("/")
   .get((req, res) => res.send(`Hello World ! at ${Date()}`));

app.listen(
  { port: PORT },
  () => console.log(`git-practice node server start at ${Date()}`)
)