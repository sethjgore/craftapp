'use strict';

app.factory('Shape', function() {

    var shapes = [{
        'name': 'art',
        'shapes': [{
            'name': 'art-a'
        }, {
            'name': 'art-an'
        }, {
            'name': 'art-the'
        }, {
            'name': 'art-plural'
        }, {
            'name': 'art-some'
        }, {
            'name': 'art-this'
        }, {
            'name': 'art-that'
        }, {
            'name': 'art-these'
        }, {
            'name': 'art-those'
        }]
    }, {
        'name': 'adjective',
        'shapes': [{
            'name': 'adj-opinion'
        }, {
            'name': 'adj-quanity'
        }, {
            'name': 'adj-size'
        }, {
            'name': 'adj-shape'
        }, {
            'name': 'adj-age'
        }, {
            'name': 'adj-color'
        }, {
            'name': 'adj-origin'
        }, {
            'name': 'adj-material'
        }, {
            'name': 'adj-qualifier'
        }]
    }, {
        'name': 'noun',
        'shapes': [{
            'name': 'noun-name'
        }, {
            'name': 'noun-thing'
        }, {
            'name': 'noun-place'
        }, {
            'name': 'noun-thing-plural'
        }, {
            'name': 'noun-place-plural'
        }, {
            'name': 'noun-poss-name'
        }, {
            'name': 'noun-poss-thing'
        }, {
            'name': 'noun-poss-place'
        }, {
            'name': 'noun-dummy'
        }, {
            'name': 'noun-ing'
        }, {
            'name': 'noun-to'
        }]
    }, {
        'name': 'verb',

        'shapes': [{

            'name': 'verb-is'
        }, {
            'name': 'verb-are'
        }, {
            'name': 'verb-ing'
        }, {
            'name': 'verb-present'
        }, {
            'name': 'verb-was'
        }, {
            'name': 'verb-were'
        }, {
            'name': 'verb-past'
        }, {
            'name': 'verb-iswillbe'
        }, {
            'name': 'verb-arewillbe'
        }, {
            'name': 'verb-has'
        }, {
            'name': 'verb-have'
        }, {
            'name': 'verb-had'
        }, {
            'name': 'verb-done'
        }, {
            'name': 'verb-do'
        }, {
            'name': 'verb-did'
        }]
    }, {
        'name': 'adverb',
        'shapes': [{
            'name': 'adv-degree'
        }, {
            'name': 'adv-frequency'
        }, {
            'name': 'adv-manner'
        }, {
            'name': 'adv-place'
        }, {
            'name': 'adv-time'
        }]
    }, {
        'name': 'pronoun',
        'shapes': [{
            'name': 'pro-subject'
        }, {
            'name': 'pro-object'
        }, {
            'name': 'pro-possessive'
        }, {
            'name': 'pro-subject-possessive'
        }, {
            'name': 'pro-object-possessive'
        }]
    }, {
        'name': 'preposition',
        'shapes': [{
            'name': 'prep-when'
        }, {
            'name': 'prep-where'
        }, {
            'name': 'prep-who'
        }]
    }, {
        'name': 'conjunction',
        'shapes': [{
            'name': 'conjunction'
        },{
            'name': 'if'
        }, {
            'name': 'negator'
        },{
            'name': 'qq'
        },{
            'name': 'qq-who'
        }, {
            'name': 'qq-where'
        },{
            'name': 'qq-time'
        },{
            'name': 'qq-many'
        },{
            'name': 'qq-much'
        }]
    }];


    var Shape = {
        all: shapes
    };

    return Shape;
});
