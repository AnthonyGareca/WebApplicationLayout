(function () {
    'use strict';

    angular.module('app.userDetails', [])
           .controller('UserDetailsController', UserDetailsController);

    UserDetailsController.$inject = ['UserService'];

    function UserDetailsController(UserService) {
        var vm = this;
        vm.id;
        vm.name;
        vm.lastName;
        vm.email;

        vm.getUser = function () {
            UserService.getUser(onSuccess, onError, vm.id);
        };

        function onSuccess(data) {
            vm.name = data.name;
            vm.lastName = data.lastName;
            vm.email = data.email;
        }

        function onError() {
            console.log("error to get user")
        }
    }
})();