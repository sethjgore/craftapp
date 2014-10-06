app.directive('shape', [function () {
  return {
    restrict: 'AE',
    replace: true,
    link: function (scope, el, attrs) {
    },
    templateUrl: 'scripts/directives/directives.shape.html'
  };
}])