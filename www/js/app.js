// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services','ngCordova','ksSwiper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      console.log("tengo los plugins");
    }else{
            console.log("no tengo los plugins");
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
  // setup an abstract state for the tabs directive
 


 .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

 
 .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signup'
  })


 .state('producto', {
    url: '/producto',
    templateUrl: 'templates/producto.html',
    controller: 'DashCtrl'
  })

 .state('producto2', {
    url: '/producto2',
    templateUrl: 'templates/producto2.html',
    controller: 'DashCtrl'
  })
 .state('producto3', {
    url: '/producto3',
    templateUrl: 'templates/producto3.html',
    controller: 'DashCtrl'
  })
  

 .state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    controller: 'DashCtrl'
  })

 .state('tipo', {
    url: '/tipo',
    templateUrl: 'templates/tipo.html',
    controller: 'DashCtrl'
  })

 .state('pagoEnSede', {
    url: '/pagoEnSede',
    templateUrl: 'templates/pagoEnSede.html',
    controller: 'DashCtrl'
  })

 .state('pagoExitoso', {
    url: '/pagoExitoso',
    templateUrl: 'templates/pagoExitoso.html',
    controller: 'DashCtrl'
  })

 .state('pago', {
    url: '/pago',
    templateUrl: 'templates/pago.html',
    controller: 'DashCtrl'
  })








  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
