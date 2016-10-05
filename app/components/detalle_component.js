(function () {


    var detalle = {
        controller:detalleController,
        templateUrl:'app/components/detalle.html'
    }

    function detalleController($routeParams,$firebaseObject) {
        var detalle = this;

        var link = firebase.database().ref('/propuestas'+ $routeParams.id)
        detalle.propuesta = $firebaseObject(link)
        console.log(detalle.propuesta)


    }

    angular
        .module('palneacionHidalgo')
        .component('detalleComponent',detalle);
})();