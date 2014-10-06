'use.strict';

app.controller('DragCtrl', function ($scope, Shape) {

   $scope.libraryPane = '';

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


   $scope.trimInput = function(key){

    //offsets key so NAME field has better spacing
    var key = key;

    return (key > 0 ? key : 1);
   }

   $scope.sentence = [{
            'shape': 'verb',
            'text': 'make'
        }, {
            'shape': 'art',
            'text': 'your'
        }, {
            'shape': 'noun',
            'text': 'sentences'
          }, {
            'shape': 'adjective',
            'text': 'happy'
          }];


    $scope.word = '';

    $scope.yell = function(str){
        var $str = str;
        console.log($str);
    }

    $scope.replaceWith= function($data){
        $scope.sentence.push($data);
    }

    $scope.addWordUnit = function(text){

        var word = {'shape': 'blank', 'text': text};

        $scope.sentence.push(word);
    }

    $scope.changeShape = function(shape){
        $scope.word['shape'] = shape;
    }

    $scope.addSentence = function(){
        $scope.sentence
    }
    $scope.currentWord = function($index){
        $scope.word = $scope.sentence[$index];
    }
});