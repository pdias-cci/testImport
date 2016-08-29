var User = function() {
    var async = require('async');
    var request = require('request');
    var constants = require('../libraries/constants');

    this.params = {};
    var self = this;


    //Echo message
    this.echoHello = function(req, res) {
        console.log("I m here echoHello");
        return res.status(200).json({ echo: "Hello world" });
    };

    //...Get all users
    this.getUsersList = function(req, res) {
        console.log("I m here getUsersList");
        return res.status(200).json({ users: "Hello" });
    };

    //GET GITHUB user by pagination
    //CALL this http://localhost:7888/user/UsersListByRange?value=2
    this.UsersListByRange = function(req, res) {

        var SinceValue = req.query.value;
        console.log("I am in UsersListByRange : " + SinceValue);

        var options = {
            url: 'https://api.github.com/users?since='+SinceValue,
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                //console.log("info : " + JSON.stringify(body));
                return res.status(200).json({ users: info });
            }
        }
        request(options, callback);
    }

    //GET GITHUB user by the username on Github
    //CAL : https://api.github.com/users/slaay
    this.getUserByDetailsName = function (req, res) {

        // var userName = req.query.value;
        // console.log(" I am in getUserByDetailsName : " + userName);

        // var options = {
        //     url: 'https://api.github.com/users/' + userName,
        //     headers: {
        //         'User-Agent': 'request'
        //     }
        // };

        // function callback(error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         var info = JSON.parse(body);
        //         console.log("info : " + JSON.stringify(body));
        //         return res.status(200).json({ users: info });
        //     } else
        //     {   
        //         console.log("error : " + error);
        //         return res.status(404).json({ users: constants.constUserNotFound});
        //     }
        // }
        // request(options, callback);
        console.log("I m here echoHello");
        return res.status(200).json({ echo: "Hello world" });
    }

}

module.exports.User = User;
