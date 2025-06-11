// import mongoose from "mongoose";\
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/learnmongodb`);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);

// const mongoose = require("mongoose");

// async function startApp() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/testDB");
//     console.log("✅ Connected to MongoDB");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }

// startApp();
