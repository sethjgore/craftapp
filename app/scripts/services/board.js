'use strict';

app.factory('Board', function(){

  var Board = {};

  Board.isVisible = false;

  Board.toggle = function(){
    Board.isVisible = !Board.isVisible;

    console.log(Board.isVisible);
  };

  return Board;
});