const express = require("express");
const userModel = require("./userModel");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
  J;
});

// How to create data
app.get("/create", async (_, res) => {
  const userdetails = await userModel.create({
    name: "Muhammad Rabbi",
    username: "Rabbi",
    email: "muhammadrabbi.dev@gmail.com",
  });
  res.send(userdetails);
});

// How to update data
app.get("/update", async (_, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { name: "Muhammad Rabbi" },
    { name: "Md Rabbi" },
    { new: true }
  );
  res.send(updatedUser);
});

// How to read all data
app.get("/read", async (_, res) => {
  const updatedUser = await userModel.find();
  res.send(updatedUser);
});

// How to read just One
app.get("/readone", async (_, res) => {
  // const updatedUser = await userModel.find({name: "Md Rabbi"}); // That's one
  const updatedUser = await userModel.findOne({ name: "Md Rabbi" }); // That's one
  res.send(updatedUser);
});

// How to update data
app.get("/delete", async (_, res) => {
  const updatedUser = await userModel.findOneAndDelete({
    name: "Muhammad Rabbi",
  });
  res.send(updatedUser);
});

app.listen(port, () => {
  console.log("app start");
});
