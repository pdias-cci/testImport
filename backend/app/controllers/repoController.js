/**
 * Description : All the repository related functionality will be done here!
 */
var Repo = function() {
    var async = require('async');
    var request = require('request');
    var constants = require('../libraries/constants');

    this.params = {};
    var self = this;


    //Echo message
    this.echoHello = function(req, res) {
        console.log("I m here in the repoController");
        return res.status(200).json({ echo: "repoController say Hi" });
    };

    // Get the details of all the users repositories (public)
    // URL to GET is https://api.github.com/users/<Github User Name>/repos
    this.getRepositoryDetails = function(req, res) {
        console.log("I am getting getRepositoryDetails");

        var repositoryOwner = req.query.value;
        var fullRespositoryURL = "https://api.github.com/users/" + repositoryOwner + "/repos";

        console.log("repositoryOwner: " + repositoryOwner);

        var options = {
            url: fullRespositoryURL,
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                return res.status(200).json({ repository: info });
            } else{
                return res.status(404).json({ repository: constants.constNoRepositoryFound });
            }
        }
        request(options, callback);
    }


}

module.exports.Repo = Repo;
