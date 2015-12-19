(function () {
    'use strict';

    angular.module('app.userForm', [])
           .controller('UserFormController', UserFormController);

    UserFormController.$inject = ['UserService',
                                  '$location'];

    function UserFormController(UserService, $location) {
        var vm = this;
        vm.name;
        vm.lastName;
        vm.email;

        vm.save = function () {
            var user = {
                name: vm.name,
                lastName: vm.lastName,
                email: vm.email
            };
            UserService.createUser(onSuccess, onError, user);
        };
        
        function onSuccess() {
            console.log("user saved");
            $location.path('userlist');
        }
        
        function onError() {
            console.log("User don't saved");
        }
    }
})();