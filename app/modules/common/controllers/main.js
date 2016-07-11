/**
 * @author ftheomunhoz
 * @description
 * Controller da view principal da aplicação.
 */

(function () {
    "use strict";

    function controller() {
        var vm = this;

        vm.search = "";
    }

    angular.module("gpm-app.common").controller("MainController", controller)
})();