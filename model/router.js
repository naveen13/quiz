quizApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/welcome', { templateUrl : './view/templates/welcome.html', controller : welcomeCtrl })
        .when('/question/:id', { templateUrl : './view/templates/question.html', controller : questionCtrl })
        .when('/question/:id/:check/:option', { templateUrl : './view/templates/question.html', controller : questionCtrl })
        .otherwise({ redirectTo : '/question/1' });
}]);