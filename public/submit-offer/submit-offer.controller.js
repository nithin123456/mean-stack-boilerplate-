(function (angular) {
    'use strict';

    angular
        .module('app.submitOffer')
        .controller('SubmitOfferController', SubmitOfferController);

    // @ngInject
    function SubmitOfferController($http) {
        var vm = this;
        vm.update = update;
        vm.getAllCandidates = getAllCandidates;

        vm.getAllCandidates();

        function update(user){
            console.log(user);
            $http.post('/candidate',
                user
            ).then(function(res){
                console.log('saved', res)
            })
        }

        function getAllCandidates () {
            $http.get('/candidate/all').then(function (res) {
                vm.candidates = res.data;
                console.log(vm.candidates)
            });
        }

    }
}(angular));