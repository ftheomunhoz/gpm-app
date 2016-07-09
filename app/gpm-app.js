/**
 * @author ftheomunhoz
 * @description
 * Módulo principal da aplicação mobile do Grupo Paulista de Montanhismo
 */


(function() {
    "use strict";

    angular.module("gpm-app", [
        "gpm-app.login",
        "gpm-app.common",
        "gpm-app.eventos",
        "gpm-app.galeria",

        "uiGmapgoogle-maps"
    ]);
})();