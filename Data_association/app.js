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

app.get("/post/create", async (req, res) => {
    const id = "684a832a287a87d8aee3c0e9";
    const createPost = await postModel.create({
        postData: 'Hello world!',
        user: id,
    });
    const user = await userModel.findOne({_id: id});
    user.posts.push(createPost._id);
    await user.save();
    res.send({
        createPost,
        user,
    });
});


app.listen(port, () => {
  console.log("App start");
});
