angular.module('app').controller('produitsCtrl',['$http','$scope',function($http,$scope){
    this.arrayProduits = [];
    var _vm=this;
    const getProduits=function(){
        $http({url:'http://localhost:5635/produits',method:'GET'}).then(
            function success(response) {
                response.data.forEach((obj,index) => {
                    _vm.arrayProduits.push(obj)
                });
            },
            function failure(response) {
                console.log('failure',response)
            }
        );
    };
    getProduits();
    $scope.viewProduit=function(produit){
        console.log(produit);
    }
}]);