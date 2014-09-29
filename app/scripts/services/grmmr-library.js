'use strict';

app.factory('Shape', function(){

    var shapes = [
      {'name': 'art'},
      {
        'name': 'adjective'
      },
      {
        'name': 'noun'
       },
      {
        'name': 'verb'
      }
     ];


    var Shape = {
      all: shapes
    };

    return Shape;
  });