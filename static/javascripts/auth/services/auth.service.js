window.angular.module('application.auth.services').
	service('Auth', function ($http, $q, $window) {
		var getToken = function () {
			return JSON.parse($window.localStorage.getItem('token'));
		};

		var setToken = function (token) {
			$window.localStorage.setItem('token', token);
		};

		var deleteToken = function () {
			$window.localStorage.removeItem('token');
		};

		var Auth = {
			login: function (username, password) {
				var deferred = $q.defer();

				return deferred.promise;
			},

			logout: function () {
				var deferred = $q.defer();

				$http.post('/api/v1/auth/login').
					success(function (response, status, headers, config) {
						deleteToken();

						deferred.resolve(response, status, headers, config);
					});

				return deferred.promise;
			}
		};

		return Auth;
	});
