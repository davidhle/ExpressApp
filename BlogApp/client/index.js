var app = angular.module('BlogApp', []);

app.controller('mainController', function($scope, $http) {
  $scope.test = "Hello!";
  

  $scope.getPosts = function() {
    $http({
          method: 'GET',
          url: '/api/posts'
        })
        .then(function(response) {
          $scope.postDB =  response.data;
        }, function(err) {
          throw err;
        });
  }

  $scope.getPosts();
});
