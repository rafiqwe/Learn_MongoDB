const mongoose = require("mongoose");

// mongoose.connect(`mongodb://127.0.0.1:27017/DataAssociation`);

const postSchema = mongoose.Schema({
    post: String,
    name: String,
    date : {
        typeof : Date,
        default: Date.now, 
    }
});

module.exports = mongoose.model("post", postSchema)