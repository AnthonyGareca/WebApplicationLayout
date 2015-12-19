(function () {
    'use strict';

    var modules = [
        'ngNewRouter',
        'ngResource',
        'app.userList',
        'app.users',
        'app.userForm',
        'app.userDetails'
    ];

    angular.module('app', modules)
            .controller('AppController', AppController);

    AppController.$inject = ['$router'];

    function AppController($router) {
        $router.config([
            {
                path: '/', redirectTo: '/userlist'
            },
            {
                path: '/userlist', component: 'userList'
            },
            {
                path: '/userform', component: 'userForm'
            },
            {
                path: '/userdetails', component: 'userDetails'
            }
        ]);
    }
})();

