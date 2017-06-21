

const express = require('express');
const app = express();


// Register '.mustache' extension with The Mustache Express
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './public');

// build an Express app that works as a directory of users in the file. You should use require to get the data from the data.js file

app.get('/', function (req, res) {
  res.render('index', {users: data.users});
});


app.listen(3000, function () {
    console.log("Successfully started express application!");
});