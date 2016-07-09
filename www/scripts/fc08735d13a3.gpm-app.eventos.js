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
            EASY: "easy",
            MEDIUM: "medium",
            HARD: "hard"
        };

        var evento = {
            id: "1921-ISA",
            titulo: "NOME EVENTO",
            tipo: "Escalada",
            data: $filter("date")(new Date(), "dd/MM/yyyy"),
            local: "LOCAL EVENTO",
            custos: $filter("currency")(25.00, "R$ "),
            interessados: 6,
            vagas: 8,
            dificuldadeTipo: "easy"
        };

        vm.eventoList = [];

        for (var i = 0; i < 20; i++) {
            var item = angular.copy(evento);
            item.titulo = item.titulo + " " + (i+1);
            vm.eventoList.push(item);
        }


    }

    angular.module("gpm-app.eventos").controller("EventosController", controller);
})();