angular.module('app').controller('produitCtrl', ['$scope', function($scope){
    this.chaine1='Du Beurre!';
    this.produit={nom:'Beurre',prix:2.00,desc:'Bah c est du beurre quoi',img:'barratte.jpg'}
    this.onAddCartClick=function(prod){
        console.log('produit ajouté:', prod);
    }
}])