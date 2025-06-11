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

app.get("/read", (req, res) => {
  res.render("read");
});
// Post method
app.post("/create", async (req, res) => {
  const { name, email, image } = req.body;
  const createUser = await userModel.create({
    name,
    email,
    image,
  });
  res.send(createUser);
});

app.listen(port, () => {
  console.log("app start");
});
