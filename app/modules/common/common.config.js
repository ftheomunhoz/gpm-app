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
                url: "/app",
                templateUrl: "modules/common/views/main.html"
            });
    }

    angular.module("gpm-app.common").config(config);
})();