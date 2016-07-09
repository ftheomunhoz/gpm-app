/**
 * @author ftheomunhoz
 * @description
 * Módulo principal da aplicação mobile do Grupo Paulista de Montanhismo
 */


(function() {
    "use strict";

    angular.module("gpm-app", [
        "gpm-app.login",
        "gpm-app.common",
        "gpm-app.eventos",
        "gpm-app.galeria",

        "uiGmapgoogle-maps"
    ]);
})();
/**
 * @author ftheomunhoz
 * @description
 * Módulo de componentes compartilhados através da aplicação.
 */


(function () {
    "use strict";

    angular.module("gpm-app.common", ["ui.router"]);
})();
/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de common. Criação do state abstrato principal 'app'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app", {
                url: "/app",
                templateUrl: "modules/common/views/main.html"
            });
    }

    angular.module("gpm-app.common").config(config);
})();
/**
 * @author ftheomunhoz
 * @description
 * Módulo de autenticação e SSO com redes sociais. Contém o state padrão da aplicação.
 */


(function () {
    "use strict";

    angular.module("gpm-app.login", ["ui.router"]);
})();
/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de login. Criação do state 'login'.
 */


(function () {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "modules/login/views/login.html",
                controller: "LoginController as vm"
            });

        $urlRouterProvider.otherwise("/login");
    }

    angular.module("gpm-app.login").config(config);
})();
/**
 * @author ftheomunhoz
 * @description
 * Módulo de visualização e manipulação do cadastro de eventos.
 */


(function () {
    "use strict";

    angular.module("gpm-app.eventos", ["ui.router", "uiGmapgoogle-maps"]);
})();
/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de eventos. Criação do state 'app.eventos'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app.eventos", {
                url: "/eventos",
                templateUrl: "modules/eventos/views/eventos.html",
                controller: "EventosController as vm"
            })
            .state("app.eventos-detalhes", {
                url: "/eventos/{id}",
                templateUrl: "modules/eventos/views/detalhes-evento.html",
                controller: "DetalhesEventoController as vm"
            });
    }

    angular.module("gpm-app.eventos").config(config);
})();
/**
 * @author ftheomunhoz
 * @description
 * Módulo de visualização de fotos e vídeos de eventos.
 */


(function () {
    "use strict";

    angular.module("gpm-app.galeria", ["ui.router"]);
})();
/**
 * @author ftheomunhoz
 * @description
 * Configuração do módulo de galeria. Criação do state 'app.galeria'.
 */


(function () {
    "use strict";
    function config($stateProvider) {
        $stateProvider
            .state("app.galeria", {
                url: "/galeria",
                templateUrl: "modules/galeria/views/galeria.html",
                controller: "GaleriaController as vm"
            });
    }

    angular.module("gpm-app.galeria").config(config);
})();