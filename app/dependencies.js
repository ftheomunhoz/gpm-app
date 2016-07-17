(function () {
    var requirejs_shim = {
        "vendor": {
            deps: []
        },
        "modules": {
            deps: ["vendor"]
        },
        "gpm-app.common": {
            deps: ["modules"]
        },
        "config/settings": {
            deps: ["gpm-app.login"]
        },
        "gpm-app.login": {
            deps: ["gpm-app.common"]
        },
        "gpm-app.eventos": {
            deps: ["modules"]
        },
        "gpm-app.galeria": {
            deps: ["modules"]
        },
        "gpm-app.repositorio": {
            deps: ["modules"]
        }
    };

    requirejs.config({
        baseUrl: "scripts/",
        waitSeconds: 0,
        shim: requirejs_shim
    });

    require(["config/settings"], function () {
        angular.bootstrap(document, ["gpm-app"]);
        define = _define;
        _define = undefined;
    });

    var _define = define;
    define = undefined;
})();
