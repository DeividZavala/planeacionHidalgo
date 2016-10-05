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


                firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                self.estado = true;
                self.email = user.email;
                console.log(user);
              } else {
                self.estado = false;
              }
            });

       
        this.logg = function(){
            $('#load').show();
            firebase.auth().signInWithEmailAndPassword(self.email, self.password)
            .then(function(response){
                console.log(response);

               window.location.replace("/#/nuevo");
            })
            .catch(function(response){
                console.log(response);
                alert('Tu usuario y contraseña son incorrectos');
                $('#load').hide();
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
            firebase.auth().signOut()
            .then(function() {
               window.location.replace("/");
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