// Ionic authapp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'authapp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'authapp.services' is found in services.js
// 'authapp.controllers' is found in controllers.js
angular.module('authapp', ['ionic', 'authapp.controllers', 'authapp.services', 'authapp.LoginCtrl', 'authapp.SignUpCtrl', 'authapp.loginService', 'authapp.signUpService', 'authapp.HomeCtrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl'
  })

// setup an abstract state for the tabs directive
.state('tab', {
  url: '/tab',
  //abstract: true,
  templateUrl: 'templates/tabs.html'
})

// Each tab has its own nav history stack:

.state('tab.dash', {
  url: '/dash',
  views: {
    'tab-dash': {
      templateUrl: 'templates/tab-dash.html',
      controller: 'DashCtrl'
    }
  }
})

.state('tab.login', {
  url: '/login',
  views: {
    'tab-login': {
      templateUrl: 'js/login/login.html',
      controller: 'LoginCtrl'
    }
  }
})

.state('tab.signup', {
  url: '/signup',
  views: {
    'tab-signup': {
      templateUrl: 'js/signup/signup.html',
      controller: 'SignUpCtrl'
    }
  }
})



// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/tab/login');

});
