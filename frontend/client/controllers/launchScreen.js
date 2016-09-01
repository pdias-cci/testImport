/*
    Description : This controller will the app launch screen only.
    Author : PresleyDias
*/
(function() {

    function launchScreen($scope, $location, constants) {
        $scope.gotoLogin = function() {
            $location.url('/login');
        }
    }
    
    launchScreen.$inject = ['$scope', '$location', 'constants'];
    angular
        .module(constants.constAppName)
        .controller('launchScreen', launchScreen);
})();
