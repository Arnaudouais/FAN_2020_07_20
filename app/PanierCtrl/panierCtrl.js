angular.module('app').controller('panierCtrl',['panierService','$scope',function(pns,$scope){
    this.arrayProduits = pns.panier;
    $scope.viewProduit=function(produit){
        console.log(produit);
    }

    this.addQuant=pns.addQuant;
    this.removeQuant=pns.removeQuant;
}]);