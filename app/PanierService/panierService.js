(function(){
    'use strict';

    angular
        .module('app')
        .service('panierService', panierService)

    function panierService(){

        this.panier = [];
        var _vm = this;

        this.removeQuant = function(produit) {
            produit.qty = (produit.qty>0 ? produit.qty-1 : 0);
            if(produit.qty === 0) {
                _vm.panier.splice(_vm.panier.findIndex((x)=>x.id===produit.id),1);
            }
        };

        this.addQuant = function(produit) {
            produit.qty += 1;
        }


    }

}());