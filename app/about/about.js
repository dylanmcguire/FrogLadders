'use strict';

angular.module('app.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutController'
  });
}])

.controller('AboutController', [function() {

}]);