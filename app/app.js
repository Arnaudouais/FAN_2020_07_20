(function(){
    'use strict';

    angular
        .module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/home',{
                template:'<h1>Boutique</h1> <p>Salut a tous !!</p> <a href="#!/produits" style="color:blue">Voir les produits</a>'
            });
            $routeProvider.when('/',{
                templateUrl:'/vues/produits.html',
                controller:'produitsCtrl',
                controllerAs:'prds'
            });
            $routeProvider.when('/produits',{
                templateUrl:'/vues/produits.html',
                controller:'produitsCtrl',
                controllerAs:'prds'
            });
            $routeProvider.when('/produit/:id',{
                templateUrl:'/vues/produit.html',
                controller:'produitCtrl',
                controllerAs:'prd'
            });
            $routeProvider.when('/panier',{
                templateUrl:'/vues/panier.html'
            });
        }])
    
}());