(function(){
    'use strict';

    angular
        .module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/home',{
                template:'<h1>Boutique</h1> <p>Salut a tous !!</p> <a href="#!/produits" style="color:blue">Voir les produits</a>'
            })
            .when('/',{
                templateUrl:'/vues/produits.html',
                controller:'produitsCtrl',
                controllerAs:'prds'
            })
            .when('/produits',{
                templateUrl:'/vues/produits.html',
                controller:'produitsCtrl',
                controllerAs:'prds'
            })
            .when('/produit/:id',{
                templateUrl:'/vues/produit.html',
                controller:'produitCtrl',
                controllerAs:'prd'
            })
            .when('/panier',{
                templateUrl:'/vues/panier.html'
            })
            .when('/newproduit',{
                template:'<produit-form></produit-form>l'
            })
            .when('/newproduit/:id',{
                templateUrl:'/vues/produitForm.html'
            })
            .otherwise({
                redirectTo:'/'
            })
        }])
    
}());