/**
 * @author ftheomunhoz
 * @description
 * Diretiva para calcular a altura de um componente com base no tamanho da página.
 */

(function () {
    "use strict";

    function fullHeight($window, $interval, $location, $anchorScroll) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var maxLeft;
                var left;
                var direction;

                var adjustLeft = function () {
                    direction = -1;
                    left = 0;
                    maxLeft = scope.fullHeightWidth - $window.outerWidth;
                    element.css(left + "px");
                    element.css("min-height", $window.outerHeight + "px");
                };
                adjustLeft();

                var iDirection = $interval(function () {
                    left = left + direction;
                    element.css("left", left+"px");

                    if (left < (maxLeft*-1) || left == 0) {
                        direction = direction * -1;
                    }
                }, 80);

                angular.element($window).bind("resize", adjustLeft);

                angular.element($window).bind("orientationchange", function() {
                    $location.hash('body');
                    $anchorScroll();
                    adjustLeft();
                });

                var destroy = scope.$on("$destroy", function() {
                    $interval.cancel(iDirection);
                    angular.element($window).unbind("resize");
                    angular.element($window).unbind("orientationchange");

                    destroy();
                });
            },
            scope: {
                fullHeightWidth: "@"
            }
        }
    }

    angular.module("gpm-app.login").directive("fullHeight", fullHeight);
})();