const functions = require("firebase-functions");

exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  res.send({ number });
});

exports.redirectTest = functions.https.onRequest((req, res) => {
  res.redirect("https://vastnesswithin.wordpress.com");
});
