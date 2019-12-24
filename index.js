const PORT = 3000;

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var logger = require('morgan');
app.use(logger('dev'));

// const dataProvider = require("./dataController");
const clientProvider = require("./clientController");

app.route("/")
   .get((req, res) => {
     if (Date() > new Date(2019, 12, 25)) {
        res.send(`Merry Christmas !`)
     } else 
        res.send(`It's almost Christmas ! at ${Date()}`)
    });

app.listen(
  { port: PORT },
  () => console.log(`git-practice node server start at ${Date()}`)
)