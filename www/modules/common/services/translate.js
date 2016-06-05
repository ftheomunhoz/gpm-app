/**
 * @author ftheomunhoz
 * @description
 * Service de obtenção e execução das traduções de textos da aplicação.
 */


(function() {
    "use strict";

    function translateService(translateConfig, $translate, $timeout) {

        var _setLanguage = function (language) {
            $translate.use(language);
            $translate.refresh(language);
        };

        var _getI18n = function (paths) {
            translateConfig.addi18n(paths);
            $timeout(function () {
                _setLanguage(translateConfig.LanguageType.PORTUGUESE);
            }, 100);
        };

        return {
            "getI18n": _getI18n,
            "setLanguage": _setLanguage
        };
    }

    angular.module("gpmapp.common").service("translateService", translateService);
})();