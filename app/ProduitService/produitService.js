(function () {
    'use strict';

    angular
        .module('app')
        .service('produitService', produitService)

    produitService.$inject = ['$http', 'panierService']
    function produitService($http, pns) {
        var _vm = this;
        this.arrayProduits = [];
        this.produit = {};
        this.ajouterAuPanier = (produit) => {
            if (produit.qty === undefined || produit.qty === 0) {
                var _prod = produit;
                _prod.qty = 1;
                pns.panier.push(_prod);
            } else {
                produit.qty += 1;
            }

        }
        const getProduits = function () {
            $http({ url: 'http://localhost:5635/produits', method: 'GET' }).then(
                function success(response) {
                    _vm.arrayProduits.slice(0)
                    response.data.forEach((obj, index) => {
                        _vm.arrayProduits.push(obj)
                    });
                },
                function failure(response) {
                    console.log('failure', response)
                }
            );
        };
        getProduits();
        this.getProduit = function (id) {
            $http({ url: 'http://localhost:5635/produits/' + id + '?_expand=categorie', method: 'GET' }).then(
                function success(response) {
                    Object.assign(_vm.produit, response.data);
                },
                function failure(response) {
                    console.log('failure', response)
                }
            );
        };

        this.flushProduit=function(){
            var k = Object.keys(_vm.produit);
            k.forEach(e => {
                eval('delete(_vm.produit.' + e + ')');
            });
        };

        this.updateProduit = function () {
            if (_vm.produit.id !== undefined) {
                $http.put('http://localhost:5635/produits/'+_vm.produit.id, {
                    'id': _vm.produit.id,
                    'nom': _vm.produit.nom,
                    'prix': _vm.produit.prix,
                    'desc': _vm.produit.desc,
                    'img': _vm.produit.img,
                })
                    .then((response) => {
                        _vm.arrayProduits[_vm.arrayProduits.findIndex(x=> x.id===response.data.id)]=response.data;
                    });

            } else {
                $http.post('http://localhost:5635/produits/', _vm.produit)
                    .then((response) => {
                        _vm.arrayProduits.push(response.data);
                    });
            }
        };

        this.setProduit = function (produit) {
            Object.assign(_vm.produit, produit);
        }
    }

}());