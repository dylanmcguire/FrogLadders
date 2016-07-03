'use strict';

angular.module('app.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsController'
  });
}])

.controller('ProductsController', [function() {

}]);