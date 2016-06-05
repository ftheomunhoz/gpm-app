/**
 * @author ftheomunhoz
 * @description
 * Component principal da aplicação.
 */

(function () {
    "use strict";

    var homeComponent = {
        templateUrl: "modules/home/views/home.html",
        $routeConfig: [
            {path: '/calendario/...', component: 'calendario', name: 'Calendario'}
        ]
    };

    angular.module("gpmapp.home").component("home", homeComponent);

    angular.module("gpmapp.home").value('$routerRootComponent', 'home')
})();