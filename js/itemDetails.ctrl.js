'use strict';

angular.module('catalogueApp').controller('itemDetailsCtrl', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location){

    $http({
        method: 'GET',
        url: './json/items.json'
    }).then(function successCallback(response) {
        angular.forEach(response.data, function (item) {
            console.log(JSON.stringify(item));
            $scope.verif($routeParams.id, item);
        });
    }, function errorCallback(response) {
        $scope.message = JSON.stringify(response);
    });

    $scope.verif = function(id, item){
        if (id == item.id){
            $scope.item = item;
            return;
        }
        return;
    };

    $scope.retour = function(){
        $location.path('/search');
    }

}]);
