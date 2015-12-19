(function(){
    'use strict';
    
    angular.module('app.userList', [])
           .controller('UserListController', UserListController);
    
    UserListController.$inject = ['UserService'];
    
    function UserListController(UserService) {
        var vm = this;
        vm.users = [];
        UserService.getAll(onSuccess, onError);
        
        function onSuccess(data) {
            vm.users = data.data;
        }
        
        function onError() {
            console.log("Response error");
        }
    }
})();