(function () {
    "use strict";

    function animateMenuBack() {
        return {
            restrict: "E",
            templateUrl: "modules/common/directives/animate-menu-back/animate-menu-back.html",
            controllerAs: "vm",
            controller: function ($state, animateMenuElement, $timeout) {
                var vm = this;

                vm.back = function () {
                    var el = animateMenuElement.element();
                    animateMenuElement.clear();

                    el.removeClass("active");

                    var siblings = el.parent().children();
                    for (var i = siblings.length - 1; i >= 0; i--) {
                        angular.element(siblings[i]).removeClass("fadeIn");
                        angular.element(siblings[i]).addClass("fadeIn");
                    }

                    $timeout(function () {
                        for (var i = siblings.length - 1; i >= 0; i--) {
                            angular.element(siblings[i]).removeClass("fadeIn");
                        }
                    }, 1000);

                    el.parent().removeClass("active");
                    el.removeClass("flipInX");

                    $state.go("app");
                };
            }
        }
    }

    angular.module("gpm-app.common").directive("animateMenuBack", animateMenuBack);
})();
