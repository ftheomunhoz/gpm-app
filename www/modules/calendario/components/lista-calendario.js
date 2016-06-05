/**
 * @author ftheomunhoz
 * @description
 * Componente de lista de eventos.
 */


(function () {
    "use strict";

    function ListaCalendarioController() {
        this.listaEventos = [
            {
                titulo: "Aula Prática 3",
                inicio: {
                    data: '04/06/2016',
                    hora: '20:00'
                },
                fim: {
                    data: '05/06/2016',
                    hora: '16:00'
                }
            }
        ];
    }

    var listaCalendario = {
        templateUrl: "modules/calendario/templates/lista-calendario.html",
        controllerAs: 'lista',
        controller: ListaCalendarioController
    };

    angular.module("gpmapp.calendario").component("listaCalendario", listaCalendario);
})();