

const express = require('express');
const app = express();


// Register '.mustache' extension with The Mustache Express
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './public');
app.use(express.static('./public'));

// build an Express app that works as a directory of users in the file. You should use require to get the data from the data.js file

app.get('/', function (req, res) {
  res.render('index', {users: data.users});
});

app.get('/:username', function(req, res) {
 // return user profile
 // console.log('access username:', req.params.username);
 var userProfile = data.users.find(function(x) {
   return x.username === req.params.username
 });
// console.log(userProfile);
 res.render('robots', userProfile);
});


app.listen(3000, function () {
    console.log("Successfully started express application!");
});


//data.users.map(user =>)
