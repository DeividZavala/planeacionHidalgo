(function () {

    var nuevo = {
        templateUrl:'app/components/nuevo.html',
        controller:nuevoController,
    }

    function nuevoController() {
        var nuevo = this;
    }

    angular
        .module('palneacionHidalgo')
        .component('nuevoComponent',nuevo);
})();