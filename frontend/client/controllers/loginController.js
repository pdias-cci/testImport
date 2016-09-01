/*
    Description : This controller will handle the user authentication. Since we do not have login
    We will only use this to get the user name entered by the user.
    Author : PresleyDias
*/
(function() {

    function loginController($location, $scope, $rootScope, constants) {

        $scope.clearUserName = function() {
            $scope.username = "";

        }

        $scope.gotoUserProfileByName = function() {
            $rootScope.username = $scope.username;
            console.log("User name : " + $scope.username);
            $location.url('/profile');
        }
    }

    loginController.$inject = ['$location', '$scope', '$rootScope', 'constants'];

    angular
        .module(constants.constAppName)
        .controller('loginController', loginController);
})();
