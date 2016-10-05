(function () {


    var nuevo = {
        templateUrl:'app/components/nuevo.html',
        controller:nuevoController,
    }

     // nuevoController.$inject = ['Auth','$location']

    function nuevoController(Auth) {
        var self = this;
        self.estate = null;
        self.userEmail = null;
        self.fecha = Date.now();
 

        
        self.userLoggedIn = function(){
            firebase.auth().onAuthStateChanged(function(user){
                if (user) {
                        self.estate = true;
                        self.userEmail = user.email;
                        console.log(user);
                      } else {
                        self.estate = false;
                      }


        });

            return self.estate;
        };
    }

    angular
        .module('palneacionHidalgo')
        .component('nuevoComponent',nuevo);
})();