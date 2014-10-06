app.directive('sentence', function () {
  return {
    restrict: 'E',
    transclude: true,
    link: function (scope, el, attrs) {
      scope.attrs = attrs;
      scope.state = attrs.state;
    },
    templateUrl: 'scripts/directives/sentence.html'
  };
});