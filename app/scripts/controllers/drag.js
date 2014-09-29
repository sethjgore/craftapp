'use.strict';

app.controller('DragCtrl', function ($scope, Shape) {

   $scope.shape = Shape.all;

   $scope.dragSortOptions = {

    accept: function (sourceItemHandleScope, destSortableScope) {
        return true;
    },

    itemMoved: function(event){
        console.log(event);
    },

    orderChanged: function(event){
        console.log("we changed order!");
    }
   };

   $scope.sentence = [{
            'shape': 'verb',
            'text': 'make '
        }, {
            'shape': 'art',
            'text': 'your '
        }, {
            'shape': 'noun',
            'text': 'sentences '
          }, {
            'shape': 'adjective',
            'text': 'happy '
          }];


    $scope.yell = function(str){
        var $str = str;
        console.log($str);
    }

    $scope.replaceWith= function($data){
        $scope.sentence.push($data);
    }
});