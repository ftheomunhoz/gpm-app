/**
 * @author ftheomunhoz
 * @description
 * Controller da página de eventos.
 */


(function () {
    "use strict";

    function controller($filter) {
        var vm = this;

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
            titulo: "NOME EVENTONOME EVENTONOME EVENTONOME EVENTONOME EVENTONOME EVENTO",
            tipo: "Escalada",
            data: $filter("date")(new Date(), "dd/MM/yyyy"),
            local: {
                nome: "LOCAL EVENTO",
                x: 1,
                y: 2
            },
            pontoEncontro: {
                nome: "BAR DE ENCONTRO",
                x: 1,
                y: 2
            },
            coordenador: "Chiko",
            custos: $filter("currency")(25.00, "R$ "),
            interessados: 6,
            vagas: 8,
            dificuldadeTipo: "easy",
            dificuldade: "4A"
        };

        vm.eventoList = [];

        for (var i = 0; i < 10; i++)
            vm.eventoList.push(evento);
    }

    angular.module("gpm-app.eventos").controller("EventosController", controller);
})();