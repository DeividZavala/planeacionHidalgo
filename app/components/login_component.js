(function () {

    var login = {
        controller:loginController,
        templateUrl:'app/components/login.html'
    }

    function loginController() {
        var login = this;
        login.putos="putos todos";
    }


    angular
        .module('palneacionHidalgo')
        .component('loginComponent',login);

})();