/**
 * @author ftheomunhoz
 * @description
 * Realiza as configurações para o módulo common. Configura a rota para a rota abstrata que contém os components
 * visuais comuns para todas as páginas da aplicação.
 */


(function () {
    "use strict";

    function config($stateProvider) {
        $stateProvider
            .state("app", {
                abstract: true,
                url: "",
                templateUrl: "modules/common/views/main.html"
            });
    }

    angular.module("gpmapp.common").config(config);
})();