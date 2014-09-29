app.directive('sentence', function () {
  return {
    restrict: 'E',
    link: function (scope, el, attrs) {
      scope.attrs = attrs;
    },
    templateUrl: 'scripts/directives/sentence.html'
  };
});