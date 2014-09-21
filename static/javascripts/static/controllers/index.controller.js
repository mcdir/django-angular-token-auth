window.angular.module('application.static.controllers')
	.controller('IndexController', function ($scope, Users) {
		Users.all().then(function (response, status, headers, config) {
			$scope.users = response;
		})
	});