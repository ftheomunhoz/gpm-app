/**
 * @author ftheomunhoz
 * @description
 * Execução inicial do módulo home. Realiza a configuração de multi-idioma.
 */


(function () {
    "use strict";

    function run(translateService) {
        translateService.getI18n(["modules/home/i18n"]);
    }

    angular.module("gpmapp.home").run(run);
})();