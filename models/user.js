const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty:']
    },
    email: {
        type: String,
        required: [true, 'email cannot appear empyty']
    },
    password: {
        type: String,
        required: [true, 'password cannot be empty']
    },
    picture: {
        type: Image,
    }
});

const post = mongoose.model('users', userSchema);
module.exports = users; 