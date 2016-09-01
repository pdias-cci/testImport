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

        $scope.repositoriesList = [];
        $scope.page = 1;
        $scope.per_page = 8;
        $scope.isTheScrollEnd = false;

        console.log("$rootScope.username : " + $rootScope.username);

        $scope.userByName = function() {
            generalservice.getProfile($rootScope.username)
                .success(function(data) {
                    console.log("data : " + JSON.stringify(data));
                    var jsonData = data.users;
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

                    //Get the first few repositories
                    $scope.repositoriesByUserName($rootScope.username, $scope.page, $scope.per_page);
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

        $scope.repositoriesByUserName = function(username, page, per_page) {
           
           if ($scope.isTheScrollEnd == false) {
            generalservice.getRepositoryDetails(username, page, per_page)
                .success(function(data) {
                    var repoList = data.repository;

                   if (repoList.length == 0) {
                        $scope.isTheScrollEnd = true;
                    } else {
                        for (var i = 0; i < repoList.length; i++) {
                            $scope.repositoriesList.push(repoList[i]);

                           }
                     }
                })
                .error(function(err) {
                    console.log("Error " + err);
                })
            }
        }

        $scope.scrollingPaginate = function() {
            console.log("I am here! scrollingPaginate!!");
            $scope.page = $scope.page + 1;
            $scope.repositoriesByUserName($rootScope.username, $scope.page, $scope.per_page);
        }
    }
})();
