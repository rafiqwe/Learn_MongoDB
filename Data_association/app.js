const express = require("express");
const userModel = require("./Models/user");
const postModel = require("./Models/post");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
    const createUser = await userModel.create({
        name: 'Muhammad Rabbi',
        email: "muhammadrabbi.dev@gmaill.com",
        age: 16,
    });
    res.send(createUser);
});

app.listen(port, () => {
  console.log("App start");
});
