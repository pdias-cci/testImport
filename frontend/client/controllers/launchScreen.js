(function() {

    // Default environment variables
    var __env = {};

    // Import variables if present
    if (window) {
        Object.assign(__env, window.__env);
    }


    angular
        .module(window.__env.MainAppName)
        .controller('launchScreen', launchScreen);

    launchScreen.$inject = ['$scope', '$location'];

    function launchScreen($scope, $location) {
        $scope.message = 'This is the launchScreen';

        $scope.gotoLogin = function() {
            $location.url('/login');
        }
    }
})();
