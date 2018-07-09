angular.module("trApp").controller("loginCTRL",function($scope,$state){

    $scope.login = function(){
        
        alert("Logged In...........");
        //$state.go("home.dashboard")

    }

});
