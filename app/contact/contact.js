'use strict';

angular.module('app.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactController'
  });
}])

.controller('ContactController', [function() {

}]);