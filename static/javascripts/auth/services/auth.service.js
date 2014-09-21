window.angular.module('application.auth.services').
	service('Auth', function ($http, $q, $window) {
		var Auth = {
			getToken: function () {
				return JSON.parse($window.localStorage.getItem('token'));
			},

			setToken: function (token) {
				$window.localStorage.setItem('token', token);
			},

			deleteToken: function () {
				$window.localStorage.removeItem('token');
			},

			login: function (username, password) {
				var deferred = $q.defer();

				$http.post('/api/v1/auth/login/', {
					username: username, password: password
				}).success(function (response, status, headers, config) {
					if (response.token) {
						Auth.setToken(response.token);
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
							deferred.resolve(response, status, headers, config);
						});
				}).error(function (response, status, headers, config) {
					deferred.reject(response, status, headers, config);
				});

				return deferred.promise;
			}
		};

		return Auth;
	});
