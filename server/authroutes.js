const firebase = require('firebase');
const admin = require("firebase-admin");


// Initialize Firebase
<<<<<<< HEAD
if (process.env.NODE_ENV !== 'test') {
  const firebaseConfig = JSON.parse(process.env.FIREBASE_AUTH);
  firebase.initializeApp(firebaseConfig);
};

=======
var config = {
    apiKey: "AIzaSyAR2V9PUTzmZxj0u-0FvnQqlg06VRlnHSc",
    authDomain: "bbasket-9e24a.firebaseapp.com",
    databaseURL: "https://bbasket-9e24a.firebaseio.com",
    projectId: "bbasket-9e24a",
    storageBucket: "bbasket-9e24a.appspot.com",
    messagingSenderId: "872393919907"
  };
firebase.initializeApp(config);
>>>>>>> 0c1383e... add server corrections

module.exports = {
    isAuthenticated: function (req, res, next) {
      let idToken = req.query.access_token;
      let user = admin.auth().verifyIdToken(idToken).then(function(decodedToken) {
      var uid = decodedToken.uid;
       return uid;
      }).catch(function(error) {
       return error
      });
<<<<<<< HEAD
const createUser = (email, password, callback) => {

  firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
  	return callback('A verification email has been sent to: ' + email)
  }).catch( error => callback('Opps. We are sorry to say: ' + error.message));
};

module.exports.signup = (req, res, next) => {
 	createUser(req.headers.username, req.headers.password, (result) =>{
   	res.send(result);
 	});
}

const signinManualUser = (email, password, callback)=>{

  firebase.auth().signInWithEmailAndPassword(email, password).then((value) => {
  	return callback(value)
  }).catch( error => callback('Opps. We are sorry to say: ' + error.message));
}

module.exports.manualSignIn = (req, res, next) => {
 	signinManualUser(req.headers.username, req.headers.password, (result) =>{
   	res.send(result);
 	});
}

module.exports.manualLogout = (req, res) =>{
	firebase.auth().signOut().then(function() {
  res.send('Sign-out successful.')
	}, function(error) {
  res.send(error)
	});
}

module.exports.isAuthenticated = (req, res, next) => {
  let user = firebase.auth().currentUser;
  console.log(user)
=======
>>>>>>> ee65690... add google auth and manual auth to UI
      if (user !== null) {
        req.user = user;
        next();
      } else {
        res.redirect('/login');
      }
    }
}


