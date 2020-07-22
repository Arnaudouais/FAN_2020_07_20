(function () {
    'use strict';

    angular
        .module ('app')
        .component ('maNavBar', maNavBar());


    function maNavBar() {

        function maNavBarController(){
            var vm = this;
        }

        return {
            controller: maNavBarController,
            controllerAs: '${ctrl}',
            templateUrl:'/app/NavBarDirective/navBar.html'
        }
    }

} ());