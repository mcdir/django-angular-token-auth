window.angular.module('application.auth.services').
	service('Auth', function ($http, $location, $q, $window) {
		var Auth = {
			getToken: function () {
				return $window.localStorage.getItem('token');
			},

			setToken: function (token) {
				$window.localStorage.setItem('token', token);
			},

			deleteToken: function () {
				$window.localStorage.removeItem('token');
			},

			getExpiration: function () {
				return new Date($window.localStorage.getItem('token_expiration'));
			},

			setExpiration: function (expiration) {
				$window.localStorage.setItem('token_expiration', expiration);
			},

			isExpired: function () {
				return new Date() > Auth.getExpiration();
			},

			willExpireSoon: function () {
				var now = new Date();

				return !Auth.isExpired() && now - Auth.getExpiration() < 60 * 60 * 1000;
			},

			login: function (username, password) {
				var deferred = $q.defer();

				$http.post('/api/v1/auth/login/', {
					username: username, password: password
				}).success(function (response, status, headers, config) {
					if (response.token) {
						var expiration = new Date();
						expiration.setTime(expiration.getTime() + (6 * 60 * 60 * 1000));

						Auth.setToken(response.token);
						Auth.setExpiration(expiration);
					}

					deferred.resolve(response, status, headers, config);
				}).error(function (response, status, headers, config) {
					deferred.reject(response, status, headers, config);
				});

				return deferred.promise;
			},

			logout: function () {
				var deferred = $q.defer();

				$http.post('/api/v1/auth/logout/', {
				}).success(function (response, status, headers, config) {
					Auth.deleteToken();

					deferred.resolve(response, status, headers, config);
				}).error(function (response, status, headers, config) {
					deferred.reject(response, status, headers, config);
				});

				return deferred.promise;
			},

			register: function (user) {
				var deferred = $q.defer();

				$http.post('/api/v1/auth/register/', {
					user: user
				}).success(function (response, status, headers, config) {
					Auth.login(user.username, user.password).
						then(function (response, status, headers, config) {
							window.location = '/';
						});
				}).error(function (response, status, headers, config) {
					deferred.reject(response, status, headers, config);
				});

				return deferred.promise;
			}
		};

		return Auth;
	});
