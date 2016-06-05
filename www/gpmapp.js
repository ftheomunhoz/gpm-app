/**
 * @author ftheomunhoz
 * @description
 * Módulo principal da aplicação mobile do GPM.
 */

(function () {
    "use strict";

    angular.module("gpmapp", [
        "ionic",
        "ionic-material",
        "gpmapp.common",
        "gpmapp.home"
    ]);
})();