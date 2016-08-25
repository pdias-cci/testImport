var Gitlib = angular.module('Gitlib', ['ngRoute']);

// configure our routes
Gitlib.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/launchScreen.html',
        controller: 'launchScreen'
    })

    .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'loginController'
    })
    .otherwise({
        redirectTo: '/'
    });
});





