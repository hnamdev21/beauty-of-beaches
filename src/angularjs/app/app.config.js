'use strict'

angular.module("app")
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
        })

        $routeProvider
            .when("/", {
                templateUrl: "index.html"
            })
            .when("/home", {
                templateUrl: "index.html"
            })
            .when("/contact", {
                templateUrl: "contact.html"
            })
            .when("/about", {
                templateUrl: "about.html"
            })
            .when("/gallery", {
                templateUrl: "gallery.html"
            })
    })