/*
    Description : This controller will handle the user's statics. 
    Author : PresleyDias
*/
(function() {

    function statisticsController($location, $scope, $rootScope, constants) {

        $scope.getHelloMessage = function() {
            $scope.username = "This is hello!";

        }
    }

    statisticsController.$inject = ['$location', '$scope', '$rootScope', 'constants'];

    angular
        .module(constants.constAppName)
        .controller('statisticsController', statisticsController);
})();
