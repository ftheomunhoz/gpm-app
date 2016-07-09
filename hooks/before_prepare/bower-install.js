/**
 * @author ftheomunhoz
 * @description
 * Instalação de dependências utilizando bower
 */

module.exports = function(ctx) {
    console.info("[bower install] Beginning installing");

    var promise = require("bower").commands.install();
    var deferral = ctx.requireCordovaModule('q').defer();

    promise.on("end", function () {
        console.info("[bower install] Finished installing");
        deferral.resolve();
    });

    promise.on("error", function(err) {
        console.info("[bower install] Error installing", err);
        deferral.reject(err);
    });

    return deferral.promise;
};