'use strict';

// Declare app level module which depends on views, and components
angular.module('howoldisfiammi', [
  'ngRoute',
  'howoldisfiammi.view1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
