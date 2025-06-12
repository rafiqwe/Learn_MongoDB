const express = require("express");
const bcrypt = require("bcrypt");

const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const userModel = require("./Models/user");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  const { email, name, password, age } = req.body;
  console.log(req.body);

  bcrypt.genSalt(10, (_, salt) => {
    bcrypt.hash(password, salt, async (_, hash) => {
      const createUser = await userModel.create({
        name,
        email,
        password: hash,
        age,
      });
      const token = jwt.sign({ email }, "shhhhh");
      res.cookie("token", token);
      res.redirect("/");
    });
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) res.send("something going wrong! email");
  console.log(user.password);

  // bcrypt.compare(req.body.password, user.password, function (err, result) {
  //   // result == true
  //   if(result) res.send("Welcome back ");
  //   else res.send("Something going Wrong!")
  // });

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ email: user.email }, "shhhhh");
      res.cookie("token", token);
      res.send("Yeah You can login");
    } else res.send("Something going wrong! password");
  });
});

app.listen(3000);
