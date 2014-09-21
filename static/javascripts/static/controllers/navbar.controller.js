window.angular.module('application.static.controllers')
	.controller('NavbarController', function ($scope, Auth) {
		$scope.login = function () {
			Auth.login('james', '73ae8hibn2').then(
				function (response, status, headers, config) {
					console.log('Logged in.');

					window.location = '/#/';
				}
			);
		};
	});