quizApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/login', { templateUrl : './view/templates/login.html', controller : loginCtrl }).otherwise({ redirectTo : '/index' });