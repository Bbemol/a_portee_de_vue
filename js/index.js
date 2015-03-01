var app = angular.module('demo', [ 'ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/1', {
    templateUrl:'page-home.html'
})
  .when('/2', {
    templateUrl:'page-introduction-1.html'
})
  .when('/3',{
    templateUrl:'page-second.html'
})
  .otherwise({
    redirectTo:'/1'
});
});

app.controller('PageOneCtrl', function($scope, $route, $location) {
  $scope.currentPath = 'one';

});

app.controller('PageTwoCtrl', function($scope, $route, $location) {
   $scope.currentPath = 'two';

});

app.controller('PageSecondCtrl', function($scope, $route, $location) {
  $scope.currentPath = 'third';
  
});

app.controller('PageViewCtrl', function($scope, $route, $location){
    $scope.pageClass = "";

    $scope.go = function(idCurrentPage, idGoingPage){
        if(idCurrentPage < idGoingPage){
            $scope.pageClass = "next";
        }else{
            $scope.pageClass = "back";
        }


    }
});

app.controller('MenuPanelCtrl', function($scope, $route, $location){
     $scope.menuClassOpen = 'menuClosed';

     $scope.openCloseMenu = function(){
        if($scope.menuClassOpen == 'menuClosed'){
          $scope.menuClassOpen = 'menuOpened';
        }else{
          $scope.menuClassOpen = 'menuClosed';
        }
     }
});

// Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
        // navigator.splashscreen.show();
    }

    // Handle the back button
    //
    function onBackKeyDown() {
      // var currentLocation = window.location.hash;
      // currentLocation = currentLocation.split('/')[1]; 
      // console.log(angular.element($('#test')).scope());
    }