'use strict';

angular.module('app.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'LandingController'
  });
}])

.controller('LandingController', [function() {

}]);