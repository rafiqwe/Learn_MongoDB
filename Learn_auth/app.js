const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req, res) => {
  bcrypt.compare("MuhammadRabbi", "$2b$10$byXqFi42PMGx9h0EM88GFOl9m093pNCqQzTyDx5VR0t12915dGSlO", function (err, result) {
    // result == true
    console.log(result);
    
  });
});

app.listen(3000);
