angular.module('app').controller('produitCtrl', ['produitService','$route','$routeParams','$scope', function(pds,$route,$routeParams,$scope){
    this.produit=pds.produit;
    
    this.onAddCartClick=function(prod){
        pds.ajouterAuPanier(pds.arrayProduits.find((elt)=>elt.id===prod.id));
    }

    this.submit=pds.updateProduit;

    if($routeParams.id !== undefined){
        pds.getProduit($routeParams.id);
    }else if($route.current.loadedTemplateUrl!=="/vues/produits.html"){
        pds.flushProduit();
        console.log('salut');
    }
}])