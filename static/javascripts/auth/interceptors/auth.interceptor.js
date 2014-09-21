window.angular.module('application.auth.interceptors')
	.service('AuthInterceptor', function ($injector) {
		var AuthInterceptor = {
			request: function (config) {
				var Auth = $injector.get('Auth');
				var token = Auth.getToken();

				if (token) {
					config.headers['Authorization'] = 'JWT ' + token;
				}

				return config;
			}
		};

		return AuthInterceptor;
	});