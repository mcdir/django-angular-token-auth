window.angular.module('application.config')
	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	});