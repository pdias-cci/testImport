(function() {

    // Default environment variables
    var __env = {};

    // Import variables if present
    if (window) {
        Object.assign(__env, window.__env);
    }


    angular
        .module(window.__env.MainAppName)
        .controller('userProfileController', userProfileController);

    userProfileController.$inject = ['$scope', 'generalservice', '$rootScope', '$window'];

    function userProfileController($scope, generalservice, $rootScope, $window) {
        $scope.loginName = "";
        $scope.username = "";
        $scope.avatarUrl = "assets/images/placeholder.png";
        $scope.email = "";
        $scope.company = "";
        $scope.blog = "";
        $scope.html_url = "";
        $scope.followers = "";
        $scope.following = "";
        $scope.public_repos = "";

        console.log("$rootScope.username : " + $rootScope.username);

        $scope.userByName = function() {
            generalservice.getProfile($rootScope.username)
                .success(function(data) {
                    console.log("data : " + JSON.stringify(data));
                    var jsonData = data.users;
                    console.log("login name : " + jsonData.login);
                    console.log(" id : " + jsonData.id);
                    console.log(" url : " + jsonData.url);
                    console.log(" name : " + jsonData.name);
                    console.log(" company : " + jsonData.company);
                    console.log(" email : " + jsonData.email);
                    console.log(" Avatar : " + jsonData.avatar_url);
                    console.log(" blog : " + jsonData.blog);
                    console.log(" html_url : " + jsonData.html_url);
                    console.log(" public_repos : " + jsonData.public_repos);
                    console.log(" followers : " + jsonData.followers);
                    console.log(" following : " + jsonData.following);

                    $scope.name = jsonData.name;
                    $scope.avatar_Url = jsonData.avatar_url;
                    $scope.login = jsonData.login;
                    $scope.email = jsonData.email;
                    $scope.company = jsonData.company;
                    $scope.blog = jsonData.blog;
                    $scope.html_url = jsonData.html_url;
                    $scope.followers = jsonData.followers;
                    $scope.following = jsonData.following;
                    $scope.public_repos = jsonData.public_repos;

                })
                .error(function(err) {
                    console.log("Error " + err);
                })
        }

        $scope.OpenURl = function(url) {
            console.log("url" + url);

            var prefix = 'http://';
            if (url.substr(0, prefix.length) !== prefix) {
                url = prefix + url;
            }
            $window.open(url, '_blank');
        }
    }
})();
