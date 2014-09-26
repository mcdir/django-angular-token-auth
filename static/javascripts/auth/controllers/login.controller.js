window.angular.module('application.auth.controllers')
	.controller('LoginController', function ($scope, Auth) {
		$scope.user = {};

		$scope.login = function () {
			Auth.login($scope.user.username, $scope.user.password).then(
				function (response, status, headers, config) {
					window.location = '/';
				},
				function (response, status, headers, config) {
					console.error('Error loggin in.');
				}	
			);
		};

	});
