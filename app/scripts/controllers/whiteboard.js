app.controller('WhiteboardCtrl', ['$scope', function ($scope, ngDraggable) {
   $scope.sentence = [{
            'shape': 'verb',
            'text': 'Create '
        }, {
            'word': 'Second',
            'shape': 'noun',
            'text': 'Your '
        }, {
            'shape': 'article',
            'text': 'Sentence '
          }, {
            'shape': 'article',
            'text': 'Now '
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