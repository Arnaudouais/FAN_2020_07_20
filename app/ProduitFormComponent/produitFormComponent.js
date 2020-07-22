(function () {
    'use strict';

    angular
        .module ('app')
        .component ('produitForm', produitFormComponent());


    function produitFormComponent() {


        return {
            controller: 'produitCtrl',
            controllerAs: 'prdForm',
            bindings: {},
            templateUrl:'/app/ProduitFormComponent/produitFormComponent.html'
        }
    }

} ());