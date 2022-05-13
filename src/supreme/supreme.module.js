(function() {
"use strict";

angular.module('supreme', [])
.constant('GithubApiPath', 'https://camunited.github.io/dev/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();