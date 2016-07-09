/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de eventos. Criação do state 'app.eventos'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app.eventos", {
                url: "/eventos",
                templateUrl: "modules/eventos/views/eventos.html",
                controller: "EventosController as vm"
            })
            .state("app.eventos-detalhes", {
                url: "/eventos/{id}",
                templateUrl: "modules/eventos/views/detalhes-evento.html",
                controller: "DetalhesEventoController as vm"
            });
    }

    angular.module("gpm-app.eventos").config(config);
})();