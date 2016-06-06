/**
 * @author ftheomunhoz
 * @description
 * Módulo principal da aplicação mobile do GPM.
 */

(function () {
    "use strict";

    angular.module("gpmapp", [
        "ionic",
        "ionic-material",
        "ngComponentRouter",
        "pascalprecht.translate",
        "ngSanitize",
        "gpmapp.common",
        "gpmapp.home",
        "gpmapp.calendario"
    ]);

    angular.module("gpmapp").config(function (translateConfigProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        translateConfigProvider.addLanguage([translateConfigProvider.LanguageType.PORTUGUESE, translateConfigProvider.LanguageType.ENGLISH, translateConfigProvider.LanguageType.SPANISH]);
    });

    angular.module("gpmapp").run(function (translateService, translateConfig) {
        translateService.setLanguage(translateConfig.LanguageType.PORTUGUESE);
    });
})();