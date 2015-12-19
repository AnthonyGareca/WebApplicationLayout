(function () {
    'use strict';

    angular.module('app.users', [])
           .service('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {
            getAll: getAll,
            createUser: createUser
        };

        function getAll(onSuccess, onError) {
           
            $http({
                method: 'GET',
                url: 'http://localhost:8080/ramdomapp/api/users'
            }).then(onSuccess, onError);
        }
        
        function createUser(onSuccess, onError, user) {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/ramdomapp/api/users', 
                data: user
            }).then(onSuccess, onError);
        }
        
        function getUser(onSuccess, onError, userId) {
           
            $http({
                method: 'GET',
                url: 'http://localhost:8080/ramdomapp/api/users/' + userId
            }).then(onSuccess, onError);
        }
        return service;
    }

})();