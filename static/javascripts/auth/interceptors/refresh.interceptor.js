window.angular.module('application.auth.interceptors')
	.service('RefreshInterceptor', function (Auth) {
		var AuthInterceptor = {
			responseError: function (response) {
				debugger;
			}
		};

		return RefreshInterceptor;
	});