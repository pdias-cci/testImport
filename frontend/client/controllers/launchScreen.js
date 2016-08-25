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

    launchScreen.$inject = ['$scope', '$rootScope'];

    function launchScreen($scope, $rootScope) {
        $scope.message = 'This is the launchScreen';

    }

})();
