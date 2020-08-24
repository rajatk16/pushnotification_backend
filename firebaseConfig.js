const admin = require('firebase-admin');

const serviceAccount = require('./ivecommerce-firebase-adminsdk-bqk33-9b6c4c4526.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ivecommerce.firebaseio.com'
})

module.exports.admin = admin