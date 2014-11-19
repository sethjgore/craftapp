'use.strict';

app.factory('Users', function (FIREBASE_URL, $firebase) {

    var ref = new Firebase(FIREBASE_URL);

    var sync =  $firebase(ref);

    var Users = {
      'name':'Fagers'
    }

    return Users;
});