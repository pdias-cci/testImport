var Gitlib = angular.module('Gitlib', ['ngRoute', 'ngAnimate', 'infinite-scroll']);

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

    .when('/profile', {
        templateUrl: 'pages/userProfile.html',
        controller: 'userProfileController'
    })

    .otherwise({
        redirectTo: '/'
    });
});





