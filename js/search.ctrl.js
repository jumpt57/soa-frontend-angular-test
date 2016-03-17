'use strict';

angular.module('catalogueApp').controller('searchCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.test = 'search';

    $scope.search = function(param) {
        console.log('rechercher ' + param);

        $http({
            method: 'GET',
            url: './json/items.json'
        }).then(function successCallback(response) {
            angular.forEach(response.data, function (item) {
                //console.log(JSON.stringify(item));
                $scope.verif(param, item);
            });
        }, function errorCallback(response) {
            $scope.message = JSON.stringify(response);
        });
    }

    $scope.verif = function(param, item){
        $scope.items = [];
        var params = param.split(' ');
        var countParam = 0;

        for(var j = 0; j < item.keyword.length; j++){
            for(var i = 0; i < params.length; i++){
                if(item.keyword[j] == params[i]){
                    console.log(JSON.stringify(item));
                    countParam++;
                }
            }
        }

        if(countParam > 0){
            $scope.items.push(item);
        }
    }

    $scope.voir = function(item){
        $location.path('/itemDetail/'+item.id);
    }

}]);
