angular.module('app').controller('panierCtrl',['$scope',function($scope){
    this.arrayProduits = [
        {nom:'Beurre',prix:2.00,desc:'Bah c est du beurre quoi',img:'barratte.jpg',qty:3},
        {nom:'Beurre',prix:2.10,desc:'Bah c est du beurre quoi',img:'barratte.jpg',qty:3},
        {nom:'Beurre',prix:2.15,desc:'Bah c est du beurre quoi',img:'barratte.jpg',qty:3},
        {nom:'Beurre',prix:2.25,desc:'Bah c est du beurre quoi',img:'barratte.jpg',qty:3},
        {nom:'Beurre',prix:2.55,desc:'Bah c est du beurre quoi',img:'barratte.jpg',qty:3}
    ]
    $scope.viewProduit=function(produit){
        console.log(produit);
    }

    this.addQuant=function addQuant(produit){
        produit.qty +=1;
    };

    this.removeQuant=function removeQuant(produit){
        produit.qty = (produit.qty>0 ? produit.qty-1 : 0);
    };
}]);