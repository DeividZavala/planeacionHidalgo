(function () {

    var login = {
        controller:loginController,
        templateUrl:'app/components/login.html'
    }

    function loginController(Auth,$location) {
        var self = this;
        login.putos="putos todos";
        self.estado = null;
        self.email = null;

       
        this.logg = function(){
            firebase.auth().signInWithEmailAndPassword(self.email, self.password)
            .then(function(response){
                console.log(response);
                $location.path('/nuevo');
                location.reload();
            })
            .catch(function(response){
                console.log(response)
            });

        };

        this.checkLogin = function(){
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                self.estado = true;
                self.email = user.email;
                console.log(user);
              } else {
                self.estado = false;
              }
            });
            console.log(self.estado);
            return self.estado;
        };

        this.logOut = function(){
            firebase.auth().signOut().then(function() {
               location.reload();
            }, function(error) {
              // An error happened.
            });
        }


    }


    angular
        .module('palneacionHidalgo')
        .component('loginComponent',login)
        .factory('Auth', authService);

        function authService($firebaseAuth){
            return firebase.auth();
            // return $firebaseAuth(link)
        }

})();