(function(){
    'use strict';

    angular
        .module('app')
        .service('panierService', panierService)

    function panierService(){

        this.panier = [];

        this.removeQuant = function(produit) {
            produit.qty = (produit.qty>0 ? produit.qty-1 : 0);
        };

        this.addQuant = function(produit) {
            produit.qty += 1;
        }


    }

}());