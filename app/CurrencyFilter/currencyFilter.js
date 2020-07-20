(function(){
    'use strict';

    angular
        .module('app')
        .filter('myCurrency', Filter)

    function Filter(){

        return FilterFn;

        function FilterFn(Params){
            
            return 'DEMAT ->'+Params
        }
    }

}());