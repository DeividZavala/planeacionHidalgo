(function () {


    var nuevo = {
        templateUrl:'app/components/nuevo.html',
        controller:nuevoController,
    }

    function nuevoController($firebaseArray,$firebaseAuth) {

        $('[data-toggle="tooltip"]').tooltip();

        var nuevo = this;
        var self = this;
        self.helper = 0;
        self.helper2 = 0;
        self.estrategia = [];
        self.estrategia_lineas = [];
        self.elNuevo = {};
        nuevo.success = false;
        self.obes = [];
        var auth = $firebaseAuth();
        self.laSecretaria = [];

// any time auth state changes, add the user data to scope
        auth.$onAuthStateChanged(function(firebaseUser) {
          self.firebaseUser = firebaseUser;
          console.log(self.firebaseUser)
          if(self.firebaseUser){
            console.log(self.firebaseUser.uid);
            var messagesRef = firebase.database().ref().child("usuarios");
            // self.usuarios = $firebaseArray(messagesRef);
            var query = messagesRef.orderByKey().equalTo(self.firebaseUser.uid);
            self.secreta = $firebaseArray(query);
            console.log(self.secretaria);

            self.secreta.$loaded()
                .then(function(){

                    angular.forEach(self.secreta, function(lista) {
                        console.log(lista);
                        self.laSecretaria.push({
                            nombre:lista.nombre,
                            secretaria:lista.secretaria,
                        });
                    });
                }); //then
            console.log(self.laSecretaria);



          }else{
            window.location.replace("/#/login");
          }
        });


        self.setObjetivos = function(){
            if (self.eje === "Gobierno Honesto, Cercano y Moderno"){
            self.obes = [
                'Finanzas Públicas',
                'Visión Municipalista',
                'Mejora regulatoria',
                'Gobierno Digital',
                'Impulso a la Participación Ciudadana',
                'Cero Tolerancia a la Corrupción',
                'Reingeniería de Gobierno'
            ];
            return true;

        } //if

        else if (self.eje === "Hidalgo Próspero y Dinámico"){
            self.obes = [
                'Políticas Económicas con Participación Social',
                'Atracción de Inversiones',
                'Más y Mejores Empleos',
                'Consolidación de Sectores Estratégicos',
                'Turismo, Palanca de Desarrollo',
                'Un Campo Moderno y Productivo'
            ];
            return true;

        } //if

         else if (self.eje === "Hidalgo Humano e Igualitario"){
            self.obes = [
                'Desarrollo Social, Integral y Solidario',
                'Educación de Relevancia y Equipada',
                'Salud con Calidad y Calidez',
                'Gobierno Humano con su Gente',
                'Cultura Física y Deporte',
                'Arte y Cultura'
            ];
            return true;

        } //if
        else if (self.eje === "Un Hidalgo Seguro con Justicia y en Paz"){
            self.obes = [
                'Gobernabilidad',
                'Derechos Humanos',
                'Seguridad Integral',
                'Procuración de Justicia con Trato Humano',
                'Readaptación y Reinserción Social',
                'Protección Civil'
            ];
            return true;

        } //if

        else if (self.eje === "Un Hidalgo con Desarrollo Sustentable"){
            self.obes = [
                'Infraestructura Sustentable',
                'Urbanismo Sustentable',
                'Movilidad y Transporte Eficiente',
                'La Energía, su Uso y Aprovechamiento',
                'Residuos, Tarea de Todos',
                'Áreas Naturales Protegidas, Patrimonio de Hidalgo',
                'Cultura Ambiental, Necesidad Impostergable',
                'Reconocer la Investigación Ambiental',
                'Agua para Todos',
                'Compromiso Global'

            ];
            return true;

        } //if
        else{
           
            return false;
        }
    }//setObjetivos

    $('#eje').on('click',self.setObjetivos());
        

        this.err = function(){
            return nuevo.success != false;
        }

        var link = firebase.database().ref('/propuestas') 
        nuevo.propuestas = $firebaseArray(link)

        nuevo.add = addPropuesta;

        function addPropuesta() {
            $('#load').show();
            console.log(nuevo.secretaria)
            console.log(nuevo.eje)
            for (i=1;i <= self.helper;i++){
                console.log(i);
                self.estrategia.push($('#es'+i).val());
            }
            for (i=1;i <= self.helper2;i++){
                console.log(i);
                self.estrategia_lineas.push($('#es'+i).val());
            }
            self.estrategia
            nuevo.propuestas.$add({
                // "secretaria":nuevo.secretaria,
                "secretaria":self.laSecretaria[0].secretaria,
                "eje":nuevo.eje,
                "indicador_estrategico":nuevo.indicador_estrategico,
                "linea_estrategica":nuevo.linea_estrategica,
                "objetivo_general":nuevo.objetivo_general,
                "estrategia_general":nuevo.estrategia_general,
                "indicadores_de_gestion":nuevo.indicadores_de_gestion,
                "programas_asociados":nuevo.programas_asociados,
                // "autor":nuevo.userEmail,
                "fecha":Date.now(),
                //probando dinamicos
                "estrategias_objetivo":self.estrategia,
                "estrategia_lineas_accion":self.estrategia_lineas,
                "objetivos_estrategicos":self.obest
            })
            .then(function(){
                $('#load').hide();
                nuevo.success = "Tu Proyecto fué guardado con éxito";
                nuevo.err();

            })
            .catch(function(error){
                alert('No se guardo, hubo un error intenta de nuevo'+error);
            });
            console.log('listo')
        }

        nuevo.estate = null;
        nuevo.userEmail = null;
        nuevo.fecha = Date.now();
 

        
        nuevo.userLoggedIn = function(){
            firebase.auth().onAuthStateChanged(function(user){
                if (user) {
                        nuevo.estate = true;
                        nuevo.userEmail = user.email;
                        // console.log(user);
                } else {
                        nuevo.estate = false;
                        window.location.replace("/#/login");

                }


        });

            return nuevo.estate;
        };


        self.newInput = function(){

                console.log('me pucharon');
                self.helper++;
                $("#estrategias").append('<div class="alert alert-dismissible" role="alert"><button ng-click="$ctrl.less()" type="button" class="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button><span>Estrategia numero '+self.helper+': </span><textarea id="es'+self.helper+'" style="margin-bottom:20px;" class="form-control col-md-10" type="text"/></textarea><br></div>');  
        
        }

        self.newInput2 = function(){

                console.log('me pucharon');
                self.helper2++;
                $("#estrategias2").append('<div class="alert alert-dismissible" role="alert"><button ng-click="$ctrl.less()" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><span>Linea de acción '+self.helper2+': </span><textarea id="es'+self.helper2+'" style="margin-bottom:20px;" class="form-control col-md-10" type="text"/></textarea><br></div>');  
        
        }

        self.less = function(){
            self.helper = self.helper - 1;
        } //no sirve






        //desman para las animaciones

        self.continuar = function(seccion,siguiente){
        $(seccion).addClass('animated slideOutLeft');
        $(siguiente).show();
        $(siguiente).addClass('animated slideInRight');
        $(seccion).slideToggle();
        }



    }// controller

    angular
        .module('palneacionHidalgo')
        .component('nuevoComponent',nuevo);
})();