(function () {
    "use strict";

    function bodyClass($document) {
        return {
            link: function(scope, element, attr) {
                var classes = attr.class.split(",");
                var body = angular.element($document).find("body");

                for (var i= 0, len=classes.length ; i<len ; i++) {
                    body.addClass(classes[i]);
                }

                var destroy = scope.$on("$destroy", function() {
                    for (var i= 0, len=classes.length ; i<len ; i++) {
                        body.removeClass(classes[i]);
                    }

                    destroy();
                });
            }
        }
    }

    angular.module('gpm-app.common').directive('bodyClass', bodyClass);
})();
