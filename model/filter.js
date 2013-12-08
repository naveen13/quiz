quizApp.filter('next', function() {
  return function(input, $scope) {
    return !$scope.isAnswerCorrect || isNaN(input) ? input : parseInt(input) < $scope.totalQuestions ? parseInt(input) + 1 : input;
  };
}).filter('prev', function() {
  return function(input, $scope) {
    return !$scope.isAnswerCorrect || isNaN(input) ? input : parseInt(input) - 1;
  };
}).filter('display', function() {
  return function(input) {
    return input ? 'show' : 'hide';
  };
}).filter('blankHash', function() {
  return function(input, id) {
    return input ? input + id : '';
  };
});