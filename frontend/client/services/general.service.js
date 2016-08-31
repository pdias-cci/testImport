(function () {
    var __env = {};

    // Import variables if present
    if (window) {
        Object.assign(__env, window.__env);
    }
  angular
    .module(window.__env.MainAppName)
    .service('generalservice', generalservice);

  generalservice.$inject = ['$http', '$window'];
  function generalservice ($http, $window) {

    getProfile = function(user) {
      return $http.get(window.__env.FullURL + '/user/userByName?value=' + user).success(function(data){
        console.log("The data + " + data);
      });
    };


    getRepositoryDetails = function(user, page, per_page) {
    return $http.get(window.__env.FullURL + '/repository/repositoryDetails?value='
      + user + "&page=" + page + "&per_page=" + per_page)
        .success(function(data) {
            console.log("The repository data : " + data);
        })
        .error(function(error) {
            console.log("The error data : " + error);
        });
     };
   
    return {
      getProfile : getProfile,
      getRepositoryDetails : getRepositoryDetails
    };
  }


})();