app.controller('writePostController', function($scope, $http) {
  $scope.writePost = function() {
    $scope.data = {Title: $scope.title, Body: $scope.body, Author: $scope.author};
    $scope.statusMsg = 'Sending data to server...';
    $http.post('/api/posts/', $scope.data).then(function(res) {
        res.data = $scope.data;
    });
  }
});
