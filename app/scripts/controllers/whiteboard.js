app.controller('WhiteboardCtrl', ['$scope', function ($scope, ngDragDrop) {
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

   $scope.bank = [{
            'text': 'Oranges'
        }, {
            'text': 'Apples'
        }, {
            'text': 'Bananas'
        }, {
            'text': 'Red'
          }
        ];

     $scope.bank2 = [{
            'text': 'Strawberries'
        }, {
            'text': 'Yellow'
        }, {
            'text': 'Purple'
        }
        ];

    $scope.yell = function(str){
        var $str = str;
        console.log($str);
    }

    $scope.sortableOptions = {
        connectWith: ".Sentence"
    }
}])