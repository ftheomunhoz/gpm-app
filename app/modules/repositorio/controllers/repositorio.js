/**
 * @author ftheomunhoz
 * @description
 * Controller da página de repositório.
 */


(function () {
    "use strict";

    function controller($window, uiGmapGoogleMapApi, $state) {
        var vm = this;

        vm.mapLoaded = false;

        vm.selectEvent = function (e) {
            $state.go("app.repositorio.detalhes", {id: e.key});
        };

        uiGmapGoogleMapApi.then(function () {
            //TODO: Salvar alterações do mapTypeId no localstorage
            //TODO: Obter ponto central pelo GPS

            vm.map = {
                center: {
                    latitude: -20.7233106,
                    longitude: -46.6146444
                },
                zoom: 6,
                dragging: true,
                options: {
                    streetViewControl: false,
                    panControl: false,
                    maxZoom: 20,
                    minZoom: 3,
                    scrollwheel: false,
                    mapTypeId: $window.google.maps.MapTypeId.TERRAIN
                },
                control: undefined
            };

            vm.mapLoaded = true;

            vm.locais = [
                {
                    id: "ID-12312313",
                    coords: {
                        latitude: -20.7233106,
                        longitude: -46.6146444
                    }
                }
            ];
        });
    }

    angular.module("gpm-app.repositorio").controller("RepositorioController", controller);
})();