/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de login. Criação do state 'login'.
 */


(function () {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "modules/login/views/login.html",
                controller: "LoginController as vm"
            });

        $urlRouterProvider.otherwise("/login");
    }

    angular.module("gpm-app.login").config(config);
})();