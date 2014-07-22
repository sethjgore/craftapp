app.controller('NavCtrl', function ($rootScope, $scope, Board){

  $rootScope.isVisible = Board.isVisible;

  $scope.toggle = function(){
    Board.toggle();

    return $rootScope.isVisible = Board.isVisible;
  }

  $scope.name = "nav";

});