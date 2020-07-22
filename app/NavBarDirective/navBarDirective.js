(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('navBar', navBarDirective);


    /** @ngInject */
    function navBarDirective() {


        function link(){

        }

        return {
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl:'app/NavBarDirective/navBar.html'
        }
    }

} ());