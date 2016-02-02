var app = angular.module('starter', ['ionic', 'leaflet-directive', 'ngCordova', 'igTruncate', 'locations.locationstore']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'MapController'
      })

      .state('app.map', {
        url: "/map",
        views: {
          'menuContent' :{
            templateUrl: "templates/map.html"
          }
        }
      })

// integrated routes from the my-notes project prefixed with app.*
      .state('list', {
        url: '/list',
        templateUrl: "templates/list.html",
        controller: 'ListCtrl',
        cache: false
      })

      .state('add', {
        url: '/add',
        templateUrl: "templates/edit.html",
        controller: "AddCtrl"
      })

      .state('edit', {
        url: '/edit/:locationId',
        templateUrl: "templates/edit.html",
        controller: 'EditCtrl'
      })



    $urlRouterProvider.otherwise('/app/map');

  });



