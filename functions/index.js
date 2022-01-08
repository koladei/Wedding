const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  const admin = require('firebase-admin')
  admin.initializeApp()

  let first  = admin
    .firestore()
    .collection('CAB')
    .get()

  response.send({
    response: 'Still working on it.' + new Date().toISOString(),
  })
})
