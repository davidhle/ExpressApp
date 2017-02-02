var app = angular.module('BlogApp', ['ngRoute', 'angular-toArrayFilter']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    controller: 'postController',
    templateUrl: 'views/home.html'
  })
  .when('/users', {
    controller: 'usersController',
    templateUrl: 'views/users.html'
  })
  .when('/writePost', {
    controller: 'writePostController',
    templateUrl: 'views/writePost.html'
  })
  .when('/editPost', {
    controller: 'editPostController',
    templateUrl: 'views/editPost.html'
  });
}]);
