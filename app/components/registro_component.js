(function () {

    var registro = {
        controller:registroController,
        templateUrl:'app/components/registro.html'
    }

    function registroController() {
        var registro = this;
    }


    angular
        .module('palneacionHidalgo')
        .component('registroComponent',registro);
})();