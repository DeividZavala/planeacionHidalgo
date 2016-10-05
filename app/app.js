(function () {
    angular
        .module('palneacionHidalgo',['firebase'])
        .controller('PlaneacionHidalgoController',PlaneacionHidalgoController);

    function PlaneacionHidalgoController() {
        var planeacion = this;
    }
})();