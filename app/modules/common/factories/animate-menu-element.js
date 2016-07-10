/**
 * @author ftheomunhoz
 * @description
 * Factory para compartilhar o estado do elemento sendo controlado pelas diretivas de animação do menu.
 */

(function () {
    "use strict";

    function factory() {
        var element = undefined;

        return {
            clear: function () {
                element = undefined;
            },
            element: function (el) {
                return element = el ? el : element;
            }
        };
    }

    angular.module("gpm-app.common").factory("animateMenuElement", factory);
})();