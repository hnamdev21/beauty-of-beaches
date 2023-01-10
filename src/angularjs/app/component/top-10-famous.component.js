'use strict'

angular.module("topTenFamous")
    .component("topTenFamous", {
        templateUrl: "/src/pages/home.html",
        controller: function(RenderData ,$scope, $http, $routeProvider) {

            $http.get("/assets/data/data-beaches.json").then(success, error)

            function success(respone, config, status, statusText) {
                var topFamous = respone.data
                $scope.topFamous = topFamous
            }

            function error(respone, config, status, statusText) {
                console.log("Somethings go wrong")
            }

            $scope.topFamous = RenderData.query()

            RenderData.query(function(data) {
                let topFamous = data
                $scope.famousBeaches = data

                $scope.topFamous = topFamous.sort((a, b) => b.id - a.id)
            })
        }
    })