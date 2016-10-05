(function () {

    var login = {
        controller:loginController,
        templateUrl:'app/components/login.html'
    }

    function loginController() {
        var login = this;
    }


    angular
        .module('palneacionHidalgo')
        .component('loginComponent',login);

})();