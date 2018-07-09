
var app = angular.module("trApp", [
    "ui.router",
    "oc.lazyLoad",
    "ngRoute",
    'ngAnimate'
]);
app.config(["$stateProvider", "$urlRouterProvider", "$ocLazyLoadProvider", function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

   $urlRouterProvider.otherwise('/home')
  ///$urlRouterProvider.otherwise('/login')

    $stateProvider.state('login', {
        templateUrl: 'app/login.html',
        url: '/login',
        controller: 'loginCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'trApp',
                    files: [
                        'controllers/login.ctrl.js',
                        

                    ]
                });
            }
        }
    }).state('login', {
        templateUrl: 'views/login.html',
        url: '/login',
        controller: 'loginCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'trApp',
                    files: [
                        'controllers/login.ctrl.js',
                        

                    ]
                });
            }
        }
    })

}]);