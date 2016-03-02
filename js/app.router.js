'use strict';

//Le paramètre :id correspond à l'identifiant de l'application sélectionné
angular.module('catalogueApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/search', {
        templateUrl: 'search.html',
        controller: 'searchCtrl'
      })
      .when('/category', {
        templateUrl: 'item.html',
        controller: 'ItemCtrl'
      })
      .when('/item', {
        templateUrl: 'category.html',
        controller: 'CategoryCtrl'
      })
      .when('/itemDetail', {
        templateUrl: 'itemDetails.html',
        controller: 'itemDetailsCtrl'
      });
      
  });
