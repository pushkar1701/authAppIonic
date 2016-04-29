angular.module('authapp.HomeCtrl', [])
  .controller('HomeCtrl', function($scope) {
    console.log("Gome gome ");
    $scope.settings = {
      enableFriends: true
    };
  });
