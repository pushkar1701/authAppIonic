angular.module('authapp.SignUpCtrl', [])
.controller('SignUpCtrl', function($scope, signUpService, $state) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.signUp = function(username, email, password, admin) {
    var askForPromise = signUpService.getPromise(username, email, password, admin);
    askForPromise.then(
      // OnSuccess function
      function(answer) {
        debugger;
        if(answer.data.success) {
          $state.go('tab.login');
        }
      },
      // OnFailure function
      function(reason) {
        console.log(reason);
      }
    );
  };
});
