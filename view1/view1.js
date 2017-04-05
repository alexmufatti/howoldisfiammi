'use strict';

angular.module('howoldisfiammi.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$interval',function($scope,$interval) {
  $scope.days = 0;
  var birthday = new moment('2015-12-23 17:58:00','YYYY-MM-DD HH:mm:SS');

  var cal = function()
  {
    var now = new moment();
    var dur = moment.duration(now.diff(birthday));

    $scope.years = dur.years();
    $scope.months = dur.months();
    $scope.days = dur.days();
    $scope.hours = dur.hours();
    $scope.minutes = dur.minutes();
    $scope.seconds = dur.seconds();
  };
  cal();

  $interval(function(){
    cal();
  },1000);
}]);
