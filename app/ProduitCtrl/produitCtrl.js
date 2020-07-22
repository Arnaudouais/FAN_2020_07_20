angular.module('app').controller('produitCtrl', ['produitService','$routeParams','$scope', function(pds,$routeParams,$scope){
    this.produit=pds.produit;
    
    this.onAddCartClick=function(prod){
        pds.ajouterAuPanier(pds.arrayProduits.find((elt)=>elt.id===prod.id));
    }

    pds.getProduit($routeParams.id);
}])