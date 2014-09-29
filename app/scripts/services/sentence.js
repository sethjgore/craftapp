'use strict';

app.factory('Sentence',
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'sentence');

    var sentences = $firebase(ref);

    var Sentence = {
      all: sentences,
      create: function (sentence) {

          return sentences.$add(sentence).then(function (ref) {
            var sentenceId = ref.name();

            user.$child('sentences').$child(sentenceId).$set(sentenceId);

          });
        }
      },
      find: function(sentenceId){
        return sentences.$child(sentenceId);
      },
    };

    return Sentence;
  });