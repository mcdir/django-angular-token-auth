window.angular.module('application.auth.controllers')
	.controller('RegisterController', function ($scope, Auth) {
		$scope.user = {};
		$scope.register = function () {
			Auth.register($scope.user).then(function (response, status, headers, config) {
				// Displays some good things
			});
		};
	});
