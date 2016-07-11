/**
 * @author ftheomunhoz
 * @description
 * Diretiva para barra de pesquisa.
 */

(function () {
    "use strict";

    function directive() {
        return {
            restrict: "E",
            templateUrl: "modules/common/directives/search-row/search-row.html",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                search: "="
            },
            controller: function () {
                var vm = this;

                vm.search = "";

                vm.clearSearch = function () {
                    vm.search = "";
                };
            }
        };
    }

    angular.module("gpm-app.common").directive("searchRow", directive);
})();