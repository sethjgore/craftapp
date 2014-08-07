app.controller('WhiteboardCtrl', ['$scope', function ($scope) {
   $scope.sentence = [{
                'word': 'First',
                'shape': 'verb',
                'text': 'Create '
            }, {
                'word': 'Second',
                'shape': 'noun',
                'text': 'Your '
            }, {
                'word': 'Second',
                'shape': 'article',
                'text': 'Sentence '
              }
            ];
}])