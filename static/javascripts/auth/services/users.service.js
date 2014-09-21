window.angular.module('application.auth.services')
	.service('Users', function ($http, $q) {
		var Users = {
			all: function () {
				var deferred = $q.defer();

				$http.get('/api/v1/users/').
				success(function (response, status, headers, config) {
					deferred.resolve(response, status, headers, config);
				}).
				error(function (response, status, headers, config) {
					deferred.reject(response, status, headers, config);
				});

				return deferred.promise;
			}
		};

		return Users;
	});