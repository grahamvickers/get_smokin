var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:[true, 'A first name is required.']
    },
    lname: {
        type:String,
        required:[true, 'A last name is required.']
    },
    email: {
        type:String,
        required:[true, 'An email is required.']
    }
});

module.exports = mongoose.model('User', UserSchema);