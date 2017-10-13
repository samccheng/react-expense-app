import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA4lhtnmgQqF6rNXQXAC9hSAFNfSAKyjTQ",
  authDomain: "expense-app-7014a.firebaseapp.com",
  databaseURL: "https://expense-app-7014a.firebaseio.com",
  projectId: "expense-app-7014a",
  storageBucket: "expense-app-7014a.appspot.com",
  messagingSenderId: "791213651057"
};

firebase.initializeApp(config);

const db = firebase.database()

export { firebase, db as default }

// db.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val()
//   console.log(`${name} is a ${job.title} at ${job.company}`)
// })
//
// db.ref().update({
//   'job/title': 'software developer',
//   'job/company': 'google'
// })

// db.ref('expenses').push({
//   description: 'rent',
//   amount: 1000,
//   note: 'jan',
//   createdAt: 4
// })
//
// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child
//       })
//     })
//
//   })
//
//   db.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child
//       })
//     })
//
//   })
//
//   db.ref('expenses/-KwHvbdtlnMb1vETsKpj').update({
//     title: 'something else'
//   })
//
//   db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.val())
//   })




// db.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// db.ref().set({
//   name: "me",
//   age: 44,
//   stress: 6,
//   job: {
//     title: 'software',
//     company: 'google'
//   },
//   location: {
//     city: 'denver',
//     state: 'co'
//   }
// }).then(() => {
//   console.log('saved')
// }).catch((e) => {
//   console.log(e)
// })
// db.ref().update({
//   'job/company': 'amazon',
//   'location/city': 'seattle',
//   stress: 9
// })
