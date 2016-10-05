(function () {
    angular
        .module('palneacionHidalgo')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/login',{
                template:`<login-component></login-component>`
            })
            .when('/info',{
                template:`<info-component></login-component>`
            })
            .when('/registro',{
                template:`<registro-component></registro-component>`
            })
            .when('/nuevo',{
                template:`<nuevo-component></nuevo-component>`
            })
    }
})();