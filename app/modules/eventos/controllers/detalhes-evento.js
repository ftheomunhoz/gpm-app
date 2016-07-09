/**
 * @author ftheomunhoz
 * @description
 * Visualização e edição dos detalhes de um evento.
 */


(function () {
    "use strict";

    function controller($filter) {
        var vm = this;

        vm.evento = {
            id: "1921-ISA",
            titulo: "NOME EVENTO",
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
    }

    angular.module("gpm-app.eventos").controller("DetalhesEventoController", controller);
})();
