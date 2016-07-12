(function () {
    "use strict";

    function animateMenuBack() {
        return {
            restrict: "E",
            templateUrl: "modules/common/directives/animate-menu-back/animate-menu-back.html",
            controllerAs: "vm",
            controller: function ($state) {
                var vm = this;

                vm.back = function () {
                    $state.go($state.$current.parent.name || "app");
                };
            }
        }
    }

    angular.module("gpm-app.common").directive("animateMenuBack", animateMenuBack);
})();
