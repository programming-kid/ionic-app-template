// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
    'ionic'
]).
run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider) {
            //enable cross domain
            //$httpProvider.defaults.useXDomain = true;
            //Remove the header used to identify ajax call  that would prevent CORS from working
            // delete $httpProvider.defaults.headers.common['X-Requested-With'];


            $stateProvider
                .state('faq', {
                    url: '/faq',
                    templateUrl: 'partials/faq.html'
                })
                .state('help', {
                    url: '/help',
                    templateUrl: 'partials/help.html'
                })
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'partials/settings.html',
                    controller: 'SettingCtrl'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'partials/about.html'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'partials/login.html',
                    controller: 'LoginCtrl'
                })
                .state('logout', {
                    url: '/logout',
                    templateUrl: 'partials/login.html',
                    controller: 'LoginCtrl'
                })
                .state('home-tab', {
                    url: "/home-tab",
                    abstract: true,
                    templateUrl: "partials/home-tabs.html",

                })
                .state('home-tab.home1', {
                    url: "/home1",
                    authenticate: true,
                    views: {
                        'home-tab1': {
                            templateUrl: "partials/home1.html",
                            controller: 'HomeCtrl'
                        }
                    }
                })
                .state('home-tab.home2', {
                    url: "/home2",
                    authenticate: true,
                    views: {
                        'home-tab2': {
                            templateUrl: "partials/home2.html",
                            controller: 'HomeCtrl'
                        }
                    }
                })
                .state('home-tab.home3', {
                    url: "/home3",
                    authenticate: true,
                    views: {
                        'home-tab3': {
                            templateUrl: "partials/home3.html",
                            controller: 'HomeCtrl'
                        }
                    }
                })
                .state('profile-tab', {
                    url: "/profile-tab",
                    abstract: true,
                    templateUrl: "partials/profile-tabs.html"
                })
                .state('profile-tab.profile1', {
                    url: "/profile1",
                    authenticate: true,
                    views: {
                        'profile-tab1': {
                            templateUrl: "partials/profile1.html",
                            controller: 'ProfileCtrl'
                        }
                    }
                })
                .state('profile-tab.profile2', {
                    url: "/profile2",
                    authenticate: true,
                    views: {
                        'profile-tab2': {
                            templateUrl: "partials/profile2.html",
                            controller: 'ProfileCtrl'
                        }
                    }
                })
                .state('profile-tab.profile3', {
                    url: "/profile3",
                    authenticate: true,
                    views: {
                        'profile-tab3': {
                            templateUrl: "partials/profile3.html",
                            controller: 'ProfileCtrl'
                        }
                    }
                })
                .state('account-tab', {
                    url: "/account-tab",
                    abstract: true,
                    templateUrl: "partials/account-tabs.html"
                })
                .state('account-tab.account1', {
                    url: "/account1",
                    authenticate: true,
                    views: {
                        'account-tab1': {
                            templateUrl: "partials/account1.html",
                            controller: 'AccountCtrl'
                        }
                    }
                })
                .state('account-tab.account2', {
                    url: "/account2",
                    authenticate: true,
                    views: {
                        'account-tab2': {
                            templateUrl: "partials/account2.html",
                            controller: 'AccountCtrl'
                        }
                    }
                })
                .state('account-tab.account3', {
                    url: "/account3",
                    authenticate: true,
                    views: {
                        'account-tab3': {
                            templateUrl: "partials/account3.html",
                            controller: 'AccountCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise("/login");
        }
    ])
    .controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.showLeftMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.showRightMenu = function () {
            $ionicSideMenuDelegate.toggleRight();
        };
    });
