/**
 * @author ftheomunhoz
 * @description
 * Serviço de configuração de multi-idioma e parametrização de textos na aplicação.
 */

(function () {
    "use strict";

    function translateConfig($translateProvider, $translatePartialLoaderProvider) {
        var _get = {};
        var _languages = [];

        $translateProvider.useLoader("$translatePartialLoader", {
            "urlTemplate": "{part}/{lang}.json"
        });

        $translateProvider.useSanitizeValueStrategy("sanitizeParameters");

        this.$get = function () {
            return _get;
        };

        this.LanguageType = {
            "PORTUGUESE": "pt-br",
            "ENGLISH": "en-us",
            "SPANISH": "es-es"
        };

        _get.LanguageType = this.LanguageType;

        this.addLanguage = function (langArr) {
            if (angular.isString(langArr)) {
                langArr = [langArr];
            }

            for (var i = 0; i < langArr.length; i++) {
                var lang = langArr[i];

                if (_languages.indexOf(lang) < 0) {
                    _languages.push(lang);
                }
            }
        };

        _get.getLanguages = function () {
            return _languages;
        };

        _get.addi18n = function (paths) {
            if (angular.isString(paths)) {
                paths = [paths];
            }

            for (var j = 0, len1 = paths.length; j < len1; j++) {
                $translatePartialLoaderProvider.addPart(paths[j]);
            }

            for (var i = 0, len2 = _languages.length; i < len2; i++) {
                $translateProvider.use(_languages[i]);
            }
        };

        _get.changeLanguage = function (language) {
            $translateProvider.preferredLanguage(language);
        };
    }

    angular.module("gpmapp.common").provider("translateConfig", translateConfig);
})();