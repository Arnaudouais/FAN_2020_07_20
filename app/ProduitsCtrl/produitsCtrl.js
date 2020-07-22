angular.module('app').controller('produitsCtrl',['$scope','produitService',function($scope,pds){
    this.arrayProduits = pds.arrayProduits;
    this.produit = pds.produit;

    this.onAddCartClick=pds.ajouterAuPanier;
    
    $scope.onviewproduitclick=function(produit){
        pds.setProduit(produit);
        // pds.getProduit(produit.id);
    }
}]);