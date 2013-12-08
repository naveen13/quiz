'use strict';

/* App Module */

var quizApp = angular.module('Quiz', []);
//, function($httpProvider){
//	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//});

quizApp.value('$questions', new Object());