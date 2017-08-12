(function(){
    'use strict';

    var states = [
        {
            name: 'signup',
            state:
                {
                    url:'/signup',
                    templateUrl: '../views/RegPage.html',
                    data: {
                        text: "REG",
                        visible: false
                    }
                }
        },
        {
            name: 'addcard',
            state:
                {
                    url:'/addcard',
                    templateUrl: '../views/creditinfo.html',
                    data: {
                        text: "add card",
                        visible: false
                    }
                }
        },
        {
            name: 'loan',
            state:
                {
                    url:'/loan',
                    templateUrl: '../views/loaninfo.html',
                    data: {
                        text: "loan",
                        visible: false
                    }
                }
        }
        ];
    var app = angular.module('dbms', [
        'ui.router'
    ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/signup');

            angular.forEach(states, function(state) {
                $stateProvider.state(state.name, state.state);
            });
        });



})();