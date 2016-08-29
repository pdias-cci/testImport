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

    userProfileController.$inject = ['$scope', '$location'];

    function userProfileController($scope, $location) {

        $scope.userByName = function($scope) {
            console.log("Get user by Name")        
        }
    }
})();
