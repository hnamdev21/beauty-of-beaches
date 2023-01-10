'use strict'

angular.module("app")
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
        })

        $routeProvider
            .when("/", {
                templateUrl: "/src/pages/home.html" 
            })
            .when("/index.html", {
                templateUrl: "/src/pages/home.html" 
            })
            .when("/home", {
                templateUrl: "/src/pages/home.html"
            })
            .when("/contact", {
                templateUrl: "/src/pages/contact.html"
            })
            .when("/about", {
                templateUrl: "/src/pages/about.html"
            })
            .when("/gallery", {
                templateUrl: "/src/pages/gallery.html"
            })
            .when("/festival", {
                templateUrl: "/src/pages/festival.html"
            })
    })