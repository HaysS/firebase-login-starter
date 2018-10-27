import * as firebase from 'firebase'


//Creates a new user in the Firebase Auth Database
export const createUser = () => {
	const exampleEmail = 'info@example.com'
	const examplePassword = 'password'

	firebase.auth().createUserWithEmailAndPassword(exampleEmail, examplePassword)
	.then((user) => {
	console.log('USER CREATED SUCCESSFULLY. HERE IS THE DATA: ', user)
	})
	.catch((error) => {
	console.log(error)
	});
}


// export const login = (email, password, cb) => {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((user) => cb(user))
//     .catch(function(error) {
//       if (errorCode === 'auth/wrong-password') {
//         alert('Wrong password.');
//       } else {
//         alert(errorMessage);
//       }
//       console.log(error);
//     });
// }