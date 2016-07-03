/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de common. Criação do state abstrato principal 'app'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app", {
                abstract: true,
                templateUrl: "modules/common/views/main.html"
            });
    }

    angular.module("gpm-app.common").config(config);
})();