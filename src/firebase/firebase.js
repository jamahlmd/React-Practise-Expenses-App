import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8L0sTR30A1-83vNTTrd4LPhpDFOFglKE",
    authDomain: "expensifyapp-e75d4.firebaseapp.com",
    databaseURL: "https://expensifyapp-e75d4.firebaseio.com",
    projectId: "expensifyapp-e75d4",
    storageBucket: "expensifyapp-e75d4.appspot.com",
    messagingSenderId: "493039801595"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is ${data.age} jaar oud en woont in ${data.location}`);
// });
//
//  const onExpenseChange = database.ref('expenses').on('value', (snapshot) => {
//      const expenses = [];
//
//      snapshot.forEach( (childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//              ...childSnapshot.val()
//          });
//      });
//      console.log(expenses);
//  });
//
// database.ref('expenses').push({
//    name: 'Jams',
//    note: '',
//    description: 22
// }).then( () => {
//     console.log("data is saved!");
// }).catch( (e) => {
//     console.log("this failed", e);
// });
//
//
// database.ref('expenses').push({
//     name: 'Leepoed',
//     note: '',
//     description: 123
// }).then( () => {
//     console.log("data is saved!");
// }).catch( (e) => {
//     console.log("this failed", e);
// });
//
//
//
// database.ref('expenses').push({
//     name: 'goegoe',
//     note: '',
//     description: 33
// }).then( () => {
//     console.log("data is saved!");
// }).catch( (e) => {
//     console.log("this failed", e);
// });
//





// database.ref('location').remove();