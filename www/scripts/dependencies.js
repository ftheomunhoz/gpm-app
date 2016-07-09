//Sat Jul 09 2016 13:35:32 GMT-0300 (E. South America Standard Time)
(function () {
    var requirejs_shim = {
        'b235a45b52d1.vendor': {
            deps: []
        },
        '498bbb330956.modules': {
            deps: ['b235a45b52d1.vendor']
        },
        '6dff1c75a9c8.gpm-app.common': {
            deps: ['498bbb330956.modules']
        },
        "config/settings": {
            deps: ['b82645b1356e.gpm-app.login']
        },
        'b82645b1356e.gpm-app.login': {
            deps: ['6dff1c75a9c8.gpm-app.common']
        },
        'fc08735d13a3.gpm-app.eventos': {
            deps: ['498bbb330956.modules']
        },
        'd997f0a53158.gpm-app.galeria': {
            deps: ['498bbb330956.modules']
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
