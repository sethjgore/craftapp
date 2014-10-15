app.directive('sentence', function () {
  return {
    restrict: 'E',
    transclude: true,
    link: function (scope, el, attrs) {
      scope.attrs = attrs;
    },
    templateUrl: '/views/directives/sentence.html'
  };
});