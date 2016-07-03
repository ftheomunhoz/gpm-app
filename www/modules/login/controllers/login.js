/**
 * @author ftheomunhoz
 * @description
 * Controller da página de login.
 */


(function () {
    "use strict";

    function controller($state) {
        var vm = this;

        vm.login = function () {
            $state.go("app.eventos")
        };
    }

    angular.module("gpm-app.login").controller("LoginController", controller);
})();