var User = function() {
    var async = require('async');
    var request = require('request');

    var constants = require('../libraries/constants')
    var CommonLib = require('../libraries/common').Common;

    var path = require('path');
    var md5 = require('md5');

    this.params = {};
    this.config = require('../config/config.js');
    var self = this;

    //Echo message
    this.echoHello = function(req, res) {
        console.log("I m here");
        return res.status(200).json({ echo: "Hello world" });
    };

    //...Get all users
    this.getUsersList = function(req, res) {
        console.log("I m here");
        return res.status(200).json({ users: "Hello" });
    };

    this.getUserListWithPagination = function (req, res) {
      console.log("I am in getUserListWithPagination");

    }

}

module.exports.User = User;
