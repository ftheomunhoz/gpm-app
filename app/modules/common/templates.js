angular.module('gpm-app.common').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/common/directives/animate-menu-back/animate-menu-back.html',
    "<i ng-click=vm.back() class=\"material-icons menu-icon menu-icon-back\">arrow_back</i>"
  );


  $templateCache.put('modules/common/directives/search-row/search-row.html',
    "<div class=search-row><div class=col-xs-24><input placeholder=\"Procure aqui...\" ng-model=vm.search name=search id=search> <i class=\"menu-search material-icons\">search</i> <i ng-click=vm.clearSearch() class=\"menu-clear material-icons\">clear</i></div><div class=clearfix></div></div>"
  );

}]);
