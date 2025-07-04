const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const userModel = require("./Models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.render("read", { users });
});

app.get("/edit/:id", async (req, res) => {
  const user = await userModel.findOne({ _id: req.params.id });
  res.render("edit", {user});
});

app.post("/update/:id", async (req, res) => {
    const {name, email, image} = req.body;
  const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {
    name,
    email,
    image,
  }, {new: true});
  res.redirect('/read');
});


app.get("/delete/:id", async (req, res) => {
  const users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});
// Post method
app.post("/create", async (req, res) => {
  const { name, email, image } = req.body;
  const createUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("/read");
});

app.listen(port, () => {
  console.log("app start");
});
