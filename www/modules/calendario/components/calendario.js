/**
 * @author ftheomunhoz
 * @description
 * Componente principal do módulo de calendário.
 */


(function () {
    "use strict";

    function CalendarioController($ionicNavBarDelegate, $translate) {
        $ionicNavBarDelegate.title($translate.instant("@CALENDARIO-TITULO"));
    }

    var calendarioComponent = {
        templateUrl: "modules/calendario/views/calendario.html",
        controllerAs: 'calendario',
        controller: CalendarioController,
        $routeConfig: [
            {path: '/', component: 'listaCalendario', name: 'ListaCalendario', useAsDefault: true}
        ]
    };

    angular.module("gpmapp.calendario").component("calendario", calendarioComponent);
})();