(function () {

    var info = {
        templateUrl:'app/components/info.html',
        controller:infoController
    }

    function infoController() {
        var info = this;
    }


    angular
        .module('palneacionHidalgo')
        .component('infoComponent',info);
})();