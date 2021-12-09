var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    profilePic: String,
    date: String,
    postMonth: String,
    img: String,
    post: String,
    job: String
});

module.exports = mongoose.model('Post', PostSchema);