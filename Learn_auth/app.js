const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("MuhammadRabbi", salt, function (err, hash) {
      // Store hash in your password DB.
      console.log(hash);
    });
  });
});

app.listen(3000);
