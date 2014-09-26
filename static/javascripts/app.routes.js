window.angular.module('application.routes')
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'IndexController',
			templateUrl: '/static/templates/static/index.html'
		}).
		when('/login', {
			controller: 'LoginController',
			templateUrl: '/static/templates/static/login.html'
		}).
		when('/register', {
			controller: 'RegisterController',
			templateUrl: '/static/templates/static/register.html'
		});
	});
