const { initializeApp, cert } = require('firebase-admin/app');

const accountSettings = require('../config/firebaseAccountSettings.json');

const fbApp = initializeApp({
    credential: cert(accountSettings),
});

module.exports = fbApp;