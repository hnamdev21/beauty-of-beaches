'use strict'

angular.module("renderData")
    .factory("RenderData", function($resource) {
        var url = "/assets/data/data-beaches.json"

        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                isArray: true,
                cache: true
                // transformRespone
                // interceptor
            },
            get: {
                method: "GET",
                // params: {"id": @id},
                isArray: true,
                cache: true
            }
        })
    })