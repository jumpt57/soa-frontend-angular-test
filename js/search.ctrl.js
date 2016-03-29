'use strict';

angular.module('catalogueApp').controller('searchCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

    document.getElementById("category").className="";
    document.getElementById("item").className="";
    document.getElementById("search").className="active";
    document.getElementById("search").focus="";

    $scope.search = function(param) {
        $scope.items = [];
        $http({
            method: 'GET',
            url: './json/items.json'
        }).then(function successCallback(response) {
            angular.forEach(response.data, function (item) {
                verif(param, item);
            });
        }, function errorCallback(response) {
            $scope.message = JSON.stringify(response);
        });
    };

    $scope.voir = function(item){
        $location.path('/itemDetail/'+item.id);
    };

    function verif(param, item){
        var params = param.split(' ');

        var find = false;
        angular.forEach(params,function(param){
            var keywords = item.keywords;
            find = contains(keywords, param);

        });
        if(find == true){
            $scope.items.push(item);
        }
    };

    function contains(keywords, param){
        var find = false;
        angular.forEach(keywords, function(keyword){
            if(keyword == param){
                find = true;
            }
        });
        return find;
    };

}]);
