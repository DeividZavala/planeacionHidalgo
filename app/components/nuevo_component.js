(function () {

    var nuevo = {
        templateUrl:'app/components/nuevo.html',
        controller:nuevoController,
    }

    function nuevoController($firebaseArray) {
        var nuevo = this;

        var link = firebase.database().ref('/propuestas') 
        nuevo.propuestas = $firebaseArray(link)

        nuevo.add = addPropuesta;

        function addPropuesta() {
            console.log(nuevo.secretaria)
            console.log(nuevo.eje)
            nuevo.propuestas.$add({
                "secretaria":nuevo.secretaria,
                "eje":nuevo.eje,
                "indicador_estrategico":nuevo.indicador_estrategico,
                "linea_estrategica":nuevo.linea_estrategica,
                "objetivo_general":nuevo.objetivo_general,
                "estrategia_general":nuevo.estrategia_general,
                "indicador(es)_de_gestion":nuevo.indicadores_de_gestion,
                "programas_asociados":nuevo.programas_asociados
            })
            console.log('listo')
        }

    }

    angular
        .module('palneacionHidalgo')
        .component('nuevoComponent',nuevo);
})();