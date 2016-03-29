'use strict';

angular.module('catalogueApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/search', {
        templateUrl: './templates/search.html',
        controller: 'searchCtrl'
      })
      .when('/item', {
        templateUrl: './templates/item.html',
        controller: 'ItemCtrl'
      })
      .when('/item/:category', {
        templateUrl: './templates/item.html',
        controller: 'ItemCtrl'
      })
      .when('/category', {
        templateUrl: './templates/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/itemDetail/:id', {
        templateUrl: './templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      }).otherwise('/search');
      
  }]);
