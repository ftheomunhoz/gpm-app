/**
 * @author ftheomunhoz
 * @description
 * Realiza as configurações para o módulo home. Configura a rota para a landing page e define a mesma como default da aplicação.
 */


(function () {
    "use strict";

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("app.home", {
                url: "/home",
                views: {
                    content: {
                        templateUrl: "modules/home/views/home.html"
                    }
                }
            });

        $urlRouterProvider.otherwise("/home");
    }

    angular.module("gpmapp.home").config(config);
})();