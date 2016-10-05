(function () {
    angular
        .module('palneacionHidalgo',['firebase','ngRoute'])
        .controller('indexCtrl',indexCtrl);

    function indexCtrl() {
        var self = this;
        self.estado = null;

        this.logOut = function(){
            firebase.auth().signOut().then(function() {
               location.reload();
            }, function(error) {
              // An error happened.
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
    }

    
    
})();