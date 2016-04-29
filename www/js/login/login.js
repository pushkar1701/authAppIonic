angular.module('authapp.LoginCtrl', [])
  .controller('LoginCtrl', function($scope, loginService, $state, $location) {
    $scope.settings = {
      enableFriends: true
    };
    $scope.signIn = function(username,password) {
      var askForPromise = loginService.getPromise(username, password);
      askForPromise.then(
        // OnSuccess function
        function(answer) {
          console.log(answer);
          if(answer.data.success) {
            debugger;
            $state.go('home', {});
            //$state.go('tab.signup', {});
            //$location.path( "/dashboard" );
            //$location.path("home");
          } else {
            alert("Incorrect credentials");
          }
          console.log(answer.data.success);
        },
        // OnFailure function
        function(reason) {
          console.log(reason);
        }
      );
      //loginService.auth(username,password);
    };

  });
