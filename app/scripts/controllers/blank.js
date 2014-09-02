app.controller('BlankCtrl', ['$scope', function ($scope, ngDragDrop) {
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
          }

        ];

    $scope.yell = function(str){
        var $str = str;
        console.log($str);
    }

    $scope.sortableOptions = {
        connectWith: ".Sentence"
    }

    $scope.replaceWith= function($data){
        $scope.sentence.push($data);
    }
}])