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

.controller('scanCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
  $rootScope.items = [];
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
            $http({
              method: 'GET',
              url: imageData
            }).then(function successCallback(response) {
                $rootScope.items.push(imageData.text +" "+response);
            }, function errorCallback(response) {
                $rootScope.items.push(imageData.text +" "+response);
            });
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };


})

.controller('logsCtrl', function($scope, $rootScope) {

});
