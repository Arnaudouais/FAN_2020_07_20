angular.module('app').controller('produitsCtrl',['$scope',function($scope){
    this.arrayProduits = [
        {nom:'Beurre',prix:2.00,desc:'Bah c est du beurre quoi',img:'barratte.jpg'},
        {nom:'Beurre',prix:2.10,desc:'Bah c est du beurre quoi',img:'barratte.jpg'},
        {nom:'Beurre',prix:2.15,desc:'Bah c est du beurre quoi',img:'barratte.jpg'},
        {nom:'Beurre',prix:2.25,desc:'Bah c est du beurre quoi',img:'barratte.jpg'},
        {nom:'Beurre',prix:2.55,desc:'Bah c est du beurre quoi',img:'barratte.jpg'}
    ]
    $scope.viewProduit=function(produit){
        console.log(produit);
    }
}]);