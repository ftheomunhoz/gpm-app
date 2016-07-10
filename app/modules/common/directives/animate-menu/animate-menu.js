(function () {
    "use strict";

    function animateMenu(animateMenuElement) {
        return {
            link: function (scope, element) {
                var toggleClass = function () {
                    if (animateMenuElement.element() === undefined) {
                        element.addClass("active");
                        element.parent().addClass("active");
                        element.addClass("flipInX");

                        animateMenuElement.element(element);
                    }
                };

                var oStateSuccess = scope.$on("$stateChangeSuccess", function (e, state) {
                    if (scope.targetState === state.name) {
                        toggleClass();
                    }
                });

                var destroy = scope.$on("$destroy", function () {
                    element.unbind("click");

                    oStateSuccess();
                    destroy();
                });
            },
            scope: {
                targetState: "@animateMenu"
            }
        }
    }

    angular.module("gpm-app.common").directive("animateMenu", animateMenu);
})();
