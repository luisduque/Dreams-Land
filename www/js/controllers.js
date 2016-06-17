angular.module('app.controllers', [])

.controller('DashCtrl', function($scope, $location, $ionicPopup, $timeout) {

$scope.alerta = function(){
    var alertPopup = $ionicPopup.alert({
      title: 'Mensaje',
      template: "Reserva hecha con exito"
    });


      $timeout(function() {
     alertPopup.close();
      }, 2000);

}

})



.controller('loginCtrl', function($scope, $location, $http, $ionicPopup, $timeout, $cordovaCamera) {



$scope.login = function(){

  $http.get("http://www.qtkcali.com/clientes/Bandlike_extend/services/Users/login/?key=q6qoqZ2jmpyq&username="+$scope.username+"&password="+$scope.password)
    .then(function successCallback(response) {

     console.log(response.data);

     if(response.data.error == 1){
    var alertPopup = $ionicPopup.alert({
      title: 'Error',
      template: response.data.mensaje
    });


      $timeout(function() {
     alertPopup.close();
     $location.path( "login" );
      }, 2000);
     }else{
    $location.path("inicio");
  }
    }, function errorCallback(response) {
       
    var alertPopup = $ionicPopup.alert({
      title: 'Error',
      template: response.data
    });


      $timeout(function() {
     alertPopup.close();
     $location.path( "login" );
      }, 2000); 

    });

}

})


.controller('signup', function($scope, $location, $http, $ionicPopup, $timeout) {
$scope.data = {};
//$scope.errors = false;
$scope.submit = function(){

var link = "http://www.qtkcali.com/clientes/Bandlike_extend/services/Users/?key=q6qoqZ2jmpyq";
var data = {name : $scope.name , username : $scope.username, password: $scope.password };

$http.post(link, data, {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
}).then(function successCallback(response) {

  var alertPopup = $ionicPopup.alert({
   title: 'Registro con exito',
   template: response.data
   });

  alertPopup.then(function(res) {
  if(res) {
  $location.path( "login" );
  }
  });

    $timeout(function() {
     alertPopup.close();
     $location.path( "login" );
  }, 1500); 



  }, function errorCallback(response) {

   var alertPopup = $ionicPopup.alert({
   title: 'Error en el registro',
   template: response.data
   });
   
    $timeout(function() {
     alertPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);


   //this.nav.present(alert);


    //  $scope.errors = true;
      //$scope.errores = response.data;
  });

};




})




/*
$http({
    url: link,
    method: "POST",
    data: {name : $scope.name , username : $scope.username, password: $scope.password },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
});
*/