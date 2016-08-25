var express = require('express');
var path = require('path');



// [SH] Require Passport
var constants = require('./app/libraries/constants.js');



var envConfig = require('./app/config/config.env.js');


var routes = require('./app/routes/index');
var user = require('./app/routes/user');

//It instantiates Express and assigns our app variable to it
var app = express();

app.use('/user', user);


// listen (start app with node server.js) ======================================
console.log("App listening on port " + envConfig.ports[0]);


module.exports = app;
