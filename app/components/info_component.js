(function () {

    var info = {
        templateUrl:'app/components/info.html',
        controller:infoController
    }

    function infoController($firebaseArray) {
        var info = this;
        var link = firebase.database().ref('/propuestas') 
        info.propuestas = $firebaseArray(link)
        console.log(info.propuestas)

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
            var esta = self.estado;
            return self.estado;
        };
    }


    angular
        .module('palneacionHidalgo')
        .component('infoComponent',info);
})();