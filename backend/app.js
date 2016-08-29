var express = require('express');
var path = require('path');
var cors = require('express-cors');


var envConfig = require('./app/config/config.env.js');
// [SH] Bring in the Passport config after model is defined

var routes = require('./app/routes/index');
var user = require('./app/routes/user');



//It instantiates Express and assigns our app variable to it
var app = express();

app.use('/user', user); 
// app.use('/', routes);

app.use(cors({
   allowedOrigins: [
       'http://localhost:9000',
   ],
    headers: [
        'x-access-token', 'Content-Type',
   'Authorization',  'Bearer'
    ]
}));


// app.use(function(req, res, next){
//  console.log(  "\033[34m \033[1m" + req.method , 
//                "\033[36m \033[1m REQUEST URL: " + "\033[32m "+req.url , 
//                "\033[36m \033[1m REQUEST TIME: " + "\033[32m "+ new Date() + "\033[31m ");
//  next();
// });



module.exports = app;