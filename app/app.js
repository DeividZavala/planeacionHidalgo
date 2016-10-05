(function () {
    angular
        .module('palneacionHidalgo',['firebase','ngRoute'])
        .controller('logout',logout);

    function logout() {
        var logout = this;
    }
    
})();