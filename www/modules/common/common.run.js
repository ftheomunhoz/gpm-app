/**
 * @author ftheomunhoz
 * @description
 * Execução do módulo common. Realiza a inicialização do Ionic, através do $ionicPlatform.
 */


(function () {
    "use strict";

    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    angular.module("gpmapp.common").run(run);
})();