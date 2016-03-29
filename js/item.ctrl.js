'use strict';

angular.module('catalogueApp').controller('ItemCtrl', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location){
	
    document.getElementById("category").className="";
    document.getElementById("item").className="active";
    document.getElementById("search").className="";

    if($routeParams.category){
		$scope.items = [];
        $http({
            method: 'GET',
            url: './json/items.json'
        }).then(function successCallback(response) {
            angular.forEach(response.data, function (item) {
            	if(item.categ==$routeParams.category)
            		$scope.items.push(item);
            });
        }, function errorCallback(response) {
            $scope.message = JSON.stringify(response);
        });
	}
	else{
		$http({
            method: 'GET',
            url: './json/items.json'
        }).then(function successCallback(response) {
            $scope.items = response.data;
        }, function errorCallback(response) {
            $scope.message = JSON.stringify(response);
        });
	}

    $scope.voir = function(item){
        $location.path('/itemDetail/'+item.id);
    };
}]);