(function () {
    "use strict";

    function animateMenu() {
        return {
            link: function (scope, element) {
                var oStateSuccess = scope.$on("$stateChangeSuccess", function (e, state) {
                    if (state.name.indexOf(scope.targetState) === 0) {
                        element.addClass("active");
                        element.parent().addClass("active");
                        element.addClass("flipInX");
                    }
                    else if (state.name === "app") {
                        element.removeClass("active");
                        element.parent().removeClass("active");
                        element.removeClass("flipInX");
                    }
                });

                var destroy = scope.$on("$destroy", function () {
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
