app.controller('usersController', function($scope, $http) {
  $scope.getUsers = function() {
    $http({
          method: 'GET',
          url: '/api/users'
        })
        .then(function(response) {
          $scope.userDB = response.data;
        }, function(err) {
          throw err;
        });
  }
  $scope.getUsers();
});
