angular.module('app').controller('produitCtrl', ['produitService','$scope', function(pds,$scope){
    this.produit=pds.produit;
    
    this.onAddCartClick=function(prod){
        pds.ajouterAuPanier(pds.arrayProduits.find((elt)=>elt.id===prod.id));
    }
}])