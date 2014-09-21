window.angular.module('application.config')
	.config(function ($httpProvider, $locationProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');

		$locationProvider.html5Mode(true).hashPrefix('!');
	});