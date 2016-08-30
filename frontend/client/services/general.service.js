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
   
    return {
      getProfile : getProfile
    };
  }


})();