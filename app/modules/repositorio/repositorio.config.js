/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de repositório. Criação do state 'app.repositorio'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app.repositorio", {
                url: "/repositorio",
                templateUrl: "modules/repositorio/views/repositorio.html",
                controller: "RepositorioController as vm"
            })
            .state("app.repositorio.detalhes", {
                url: "/repositorio/{id}",
                templateUrl: "modules/repositorio/views/detalhes-repositorio.html",
                controller: "DetalhesRepositorioController as vm",
                hideSearch: true
            });
    }

    angular.module("gpm-app.repositorio").config(config);
})();