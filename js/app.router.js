'use strict';

angular.module('catalogueApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/search', {
        templateUrl: './templates/search.html',
        controller: 'searchCtrl'
      })
      .when('/category', {
        templateUrl: './templates/item.html',
        controller: 'ItemCtrl'
      })
      .when('/item', {
        templateUrl: './templates/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/itemDetail/:id', {
        templateUrl: './templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      }).otherwise('/search');
      
  }]);
