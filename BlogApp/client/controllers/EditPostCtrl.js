app.controller('editPostController', function($scope, $http) {
  $scope.editPost = function(id) {
    var id = $scope.id;
    $scope.data = {Title: $scope.title, Body: $scope.body, Author: $scope.author};
    $scope.statusMsg = 'Sending data to server...';
    $http.put('/api/posts/' + id, $scope.data).then(function(res) {
        res.data = $scope.data;
    });
  }
});
