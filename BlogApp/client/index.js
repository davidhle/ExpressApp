var app = angular.module('BlogApp', []);

app.controller('mainController', function($scope, $http) {
  $scope.test = "Hello!";
});
