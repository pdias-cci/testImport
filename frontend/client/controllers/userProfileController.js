(function() {

    // Default environment variables
    var __env = {};

    // Import variables if present
    if (window) {
        Object.assign(__env, window.__env);
    }


    angular
        .module(window.__env.MainAppName)
        .controller('userProfileController', userProfileController);

    userProfileController.$inject = ['$scope', '$location', 'generalservice'];

    function userProfileController($scope, $location, generalservice) {

        $scope.userByName = function($scope) {
            console.log("Get user by Name")

            generalservice.getProfile("slaay")
            .success(function(data) {
                console.log("data : " + data);
            })
            .error(function(err) {
                console.log("Error " + err);
            })
        }
    }
})();
