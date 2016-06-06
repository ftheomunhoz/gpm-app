/**
 * @author ftheomunhoz
 * @description
 * Módulo principal da aplicação mobile do GPM.
 */

(function () {
    "use strict";

    angular.module("gpmapp", [
        "ionic"
    ]);

    angular.module("gpmapp").config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });

})();