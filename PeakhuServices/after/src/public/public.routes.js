( function(){
	'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
    // Routes
    $stateProvider
        .state('public', {
            abstract: true,
            templateUrl: 'src/public/public.html'
        })
        .state('public.home', {
            url: '{lang}',
            templateUrl: 'src/public/home/home.html',
            // controller: 'HomeCtrl',
            // controllerAs: 'homeCtrl',
            // resolve: {
            //     lang: 'sameValue'
            // }
        })
        .state('public.home.about', {
            url: '/about',
            templateUrl: 'src/public/navigations/about/about.html',
        })
}

})();