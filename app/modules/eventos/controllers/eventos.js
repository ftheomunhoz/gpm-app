/**
 * @author ftheomunhoz
 * @description
 * Controller da página de eventos.
 */


(function () {
    "use strict";

    function controller($filter) {
        var vm = this;

        vm.busca = "";

        vm.TIPO = {
            ESCALADA: "Escalada",
            TRAVESSIA: "Travessia"
        };

        vm.DIFICULDADE = {
            FACIL: "facil",
            MEDIO: "medio",
            DIFICIL: "dificil"
        };

        vm.filtro = function (filtro) {
            var list = [];
            filtro = filtro.toUpperCase();

            for (var i = 0, len = eventoList.length; i < len; i++) {
                var item = eventoList[i];

                if (item.titulo.toUpperCase().indexOf(filtro) >= 0 ||
                    item.tipo.toUpperCase().indexOf(filtro) >= 0 ||
                    item.local.toUpperCase().indexOf(filtro) >= 0 ||
                    item.data.toUpperCase().indexOf(filtro) >= 0) {
                    list.push(item);
                }
            }

            vm.eventoList = list;
        };

        var evento = {
            titulo: "NOME EVENTO",
            tipo: "Escalada",
            data: $filter("date")(new Date(), "dd/MM/yyyy"),
            local: "LOCAL EVENTO",
            interessados: 6,
            vagas: 8
        };

        vm.eventoList = [];
        var eventoList = [];

        for (var i = 0; i < 20; i++) {
            var item = angular.copy(evento);
            item.id = "ID-" + i;
            item.titulo = item.titulo + " " + (i + 1);
            eventoList.push(item);
        }

        vm.eventoList = eventoList;
    }

    angular.module("gpm-app.eventos").controller("EventosController", controller);
})();