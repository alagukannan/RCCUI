var app = angular.module("rccApp", ["ngRoute","ui.bootstrap","ngAnimate"]);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/token/:tokenId/status/:status', {
    templateUrl: '/js/views/registration.htm',
    controller: 'registrationController',
    controllerAs: 'registration'
   })
   .when('/',{
       templateUrl: '/js/views/home.htm'
   });
   
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});

