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
    }


    angular
        .module('palneacionHidalgo')
        .component('infoComponent',info);
})();