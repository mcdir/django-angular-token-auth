window.angular.module('application', [
	'application.config',
	'application.routes',
	'application.auth'
]);

window.angular.module('application.config', []);
window.angular.module('application.routes', ['ngRoute']);