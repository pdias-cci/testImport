/*
    Description : All the common API consuming code will be added here.
    Author : PresleyDias
*/
(function() {

    function generalservice($http, $window, constants) {

        getProfile = function(user) {
            return $http.get(constants.constFullURL + '/user/userByName?value=' + user)
                .success(function(data) {});
        };


        getRepositoryDetails = function(user, page, per_page) {
            return $http.get(constants.constFullURL + '/repository/repositoryDetails?value=' + user + "&page=" + page + "&per_page=" + per_page)
                .success(function(data) {})
                .error(function(error) {
                    console.log("The error data : " + error);
                });
        };

        return {
            getProfile: getProfile,
            getRepositoryDetails: getRepositoryDetails
        };
    }

    generalservice.$inject = ['$http', '$window', 'constants'];

    angular
        .module(constants.constAppName)
        .service('generalservice', generalservice);
})();
