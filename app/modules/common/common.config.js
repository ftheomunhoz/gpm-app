/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de common. Criação do state abstrato principal 'app'.
 */


(function () {
    "use strict";
    function config($stateProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: "AIzaSyA0quwGqcRiTYvevyzHzJNUIjkOrcX8jWI",
            libraries: "visualization"
        });

        $stateProvider
            .state("app", {
                url: "/app",
                templateUrl: "modules/common/views/main.html",
                controller: "MainController as main"
            });
    }

    angular.module("gpm-app.common").config(config);
})();