angular.module('authapp.signUpService', [])
  .service('signUpService', ['$http', '$q', function($http , $q) {

    var deferObject,
      signupdata = {
        getPromise: function(user, email, pass, admin) {
          var promise = $http({
            method: 'POST',
            url: 'http://localhost:8080/signup',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
              var str = [];
              for (var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
            },
            data: {
              name: user,
              email: email,
              password: pass,
              admin: admin
            },
          }),
          deferObject = deferObject || $q.defer();
          promise.then(
            // OnSuccess function
            function(data) {
              //console.log(data);
              deferObject.resolve(data);
              // This code will only run if we have a successful promise.
            },
            // OnFailure function
            function(reason) {
              //console.log(reason);
              deferObject.reject(reason);
              // This code will only run if we have a failed promise.
            });
            return deferObject.promise;
        }
      };
    return signupdata;

      // var factory = {};
      //
      // factory.signup = function(user, email, pass, admin) {
      // $http({
      //   method: 'POST',
      //   url: 'http://localhost:8080/signup',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   transformRequest: function(obj) {
      //     var str = [];
      //     for (var p in obj)
      //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //     return str.join("&");
      //   },
      //   data: {
      //     name: user,
      //     email: email,
      //     password: pass,
      //     admin: admin
      //   },
      // }).success(function(response) {
      //   console.log(response);
      // });
    //}

    //return factory;
  }])
