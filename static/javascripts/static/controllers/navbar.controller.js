window.angular.module('application.static.controllers')
	.controller('NavbarController', function ($scope, Auth) {
		$scope.isLoggedIn = !!Auth.getToken();

		$scope.logout = function () {
			Auth.logout();

			return false;
		};
	});
