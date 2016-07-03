/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de galeria. Criação do state 'app.galeria'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app.galeria", {
                url: "/galeria",
                templateUrl: "modules/galeria/views/galeria.html",
                controller: "GaleriaController as vm"
            });
    }

    angular.module("gpm-app.galeria").config(config);
})();