angular.module('authapp.loginService', [])
  .factory("loginService", ['$http', '$q', function($http, $q) {

    var deferObject,
      signupdata = {
        getPromise: function(user, pass) {
          var promise = $http({
            method: 'POST',
            url: 'http://localhost:8080/api/authenticate',
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
              password: pass
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

    ////////////////////////////////////////////////////
    var factory = {};

    factory.auth = function(user, pass) {
      $http({
        method: 'POST',
        url: 'http://localhost:8080/api/authenticate',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function(obj) {
          var str = [];
          for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
          console.log(str.join("&"));
        },
        data: {
          name: user,
          password: pass
        }
      }).success(function(response) {
        //debugger;
        console.log(response);
      });
    }
    return factory;
  }])
