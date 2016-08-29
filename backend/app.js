var express = require('express');
var path = require('path');
var cors = require('express-cors');


// [SH] Require Passport
var constants = require('./app/libraries/constants.js');



var envConfig = require('./app/config/config.env.js');


var routes = require('./app/routes/index');
var user = require('./app/routes/user');

//It instantiates Express and assigns our app variable to it
var app = express();

app.use('/user', user);

// app.use(cors({
//     allowedOrigins: [
//         'http://localhost:9888'
//     ],
// 	headers: [
// 	'x-access-token', 'Content-Type'
// 	]
// }));
app.use(cors({
    allowedOrigins: [
    'http://localhost:9888',
    'http://localhost',
    ]
}));

// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// listen (start app with node server.js) ======================================
console.log("App listening on port " + envConfig.ports[0]);


module.exports = app;
