angular.module('app').controller('produitCtrl', ['$http','$scope', function($http,$scope){
    var _vm = this;
    const getProduit=function(){
        $http({url:'http://localhost:5635/produits/1',method:'GET'}).then(
            function success(response) {
                _vm.produit=response.data;
                console.log('produitCtrl:',_vm.produit)
            },
            function failure(response) {
                console.log('failure',response)
            }
        );
    };
    this.produit=getProduit();
    this.onAddCartClick=function(prod){
        console.log('produit ajouté:', prod);
    }
}])