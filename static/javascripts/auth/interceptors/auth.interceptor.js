window.angular.module('application.auth.interceptors')
	.service('AuthInterceptor', function (Auth) {
		var AuthInterceptor = {
			request: function (config) {
				var token = Auth.getToken();

				if (token) {
					config.headers['Authorization'] = ' '.join([
						'JWT', token
					]);
				}
			}
		};

		return AuthInterceptor;
	});