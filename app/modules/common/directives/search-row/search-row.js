/**
 * @author ftheomunhoz
 * @description
 * Diretiva para barra de pesquisa.
 */

(function () {
    "use strict";

    function directive($state) {
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
                vm.hideSearch = false;

                vm.clearSearch = function () {
                    vm.search = "";
                };
            },
            link: function (scope, element) {
                var parent = angular.element(element).parent().parent();

                var checkHideSearch = function (state) {
                    if (state.views) {
                        for (var v in state.views) {
                            checkHideSearch(state.views[v]);
                            return;
                        }
                    }

                    scope.vm.hideSearch = state.hideSearch === true;

                    if (scope.vm.hideSearch === true) {
                        parent.addClass("search-hidden");
                    }
                    else {
                        parent.removeClass("search-hidden");
                    }
                };
                checkHideSearch($state.current);

                var oStateSuccess = scope.$on("$stateChangeSuccess", function (e, state) {
                    checkHideSearch(state);
                });

                var destroy = scope.$on("$destroy", function () {
                    oStateSuccess();
                    destroy();
                });
            }
        };
    }

    angular.module("gpm-app.common").directive("searchRow", directive);
})();