(function () {
    "use strict";

    function currentState($state) {
        return {
            link: function (scope, element) {
                var targets = element.find("*");
                var states = [];
                var index = -1;

                for (var i = targets.length; i >= 0; i--) {
                    var el = angular.element(targets[i]);
                    var state = el.attr("ui-sref");

                    if (angular.isUndefined(state)) {
                        targets.splice(i, 1);
                    }
                    else {
                        targets[i] = el;
                        states.push(state);
                    }
                }

                states = states.reverse();

                var oState = scope.$on("$stateChangeSuccess", function (e, state) {
                    if (index >= 0) {
                        targets[index].removeClass("current-state");
                    }

                    index = states.indexOf(state.name);
                    if (index >= 0) {
                        targets[index].addClass("current-state");
                    }
                });

                var destroy = scope.$on("$destroy", function () {
                    oState();
                    destroy();
                });
            }
        }
    }

    angular.module('gpm-app.common').directive('currentState', currentState);
})();
