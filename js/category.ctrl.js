'use strict';

angular.module('catalogueApp').controller('CategoryCtrl', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location){
	
    document.getElementById("category").className="active";
    document.getElementById("item").className="";
    document.getElementById("search").className="";

	$http({
        method: 'GET',
        url: './json/categories.json'
    }).then(function successCallback(response) {
    	$scope.categories = response.data;
    }, function errorCallback(response) {
        $scope.message = JSON.stringify(response);
    });

    $scope.categoryClick = function(category){
        $location.path('/item/'+category.id);
    };
}]);