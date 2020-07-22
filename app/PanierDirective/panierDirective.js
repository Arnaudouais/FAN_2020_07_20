(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('monPanier', directive);


    /** @ngInject */
    function directive() {

        function link(){

        }

        return {
            bindToController: true,
            controller: 'panierCtrl',
            controllerAs: 'pns',
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl:'/app/PanierDirective/panier.html'
        }
    }

} ());