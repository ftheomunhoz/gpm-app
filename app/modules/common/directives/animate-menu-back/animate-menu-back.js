(function () {
    "use strict";

    function animateMenuBack($state) {
        return {
            restrict: "E",
            templateUrl: "modules/common/directives/animate-menu-back/animate-menu-back.html",
            controllerAs: "vm",
            replace: true,
            link: function (scope, element) {
                element.bind("click", function (e) {
                    e.preventDefault();
                    $state.go($state.$current.parent.name || "app");
                });

                var destroy = scope.$on("$destroy", function () {
                    element.unbind("click");
                    destroy();
                });
            }
        }
    }

    angular.module("gpm-app.common").directive("animateMenuBack", animateMenuBack);
})();
