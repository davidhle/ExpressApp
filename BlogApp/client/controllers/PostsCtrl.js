app.controller('postController', function($scope, $http) {
  $scope.getPosts = function() {
    $http({
          method: 'GET',
          url: '/api/posts'
        })
        .then(function(response) {
          $scope.postDB = response.data;
        }, function(err) {
          throw err;
        });
  }
  $scope.getPosts();
});
