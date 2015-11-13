angular.module('app.controllers', ['ngCordova'])

.controller('loginCtrl', ['$http','$scope', function($scope ,$http) {
  $scope.logged = false;
  $scope.username = "Guy Fawkes";
  $scope.login = function() {
    $http({
      method: 'POST',
      url: 'http://intranet.animest.net/home/login'
    }).then(function successCallback(response) {
      $scope.logged = true;
      //on recoit la page d'acceuil, il faut récupérer le coockie
    }, function errorCallback(response) {
      $scope.logged = false;
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
}])

.controller('scanCtrl', function($scope, $rootScope) {
  $rootScope.items = [];
  $scope.scanBarcode = function() {
                $rootScope.items.push("ertertert");
    };
})

.controller('logsCtrl', function($scope, $rootScope) {

});
