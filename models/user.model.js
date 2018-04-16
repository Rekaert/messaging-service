const mongoose = require('mongoose');
const MessageSchema = require('./message.model');


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Email is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },
});


module.exports = mongoose.model('User', UserSchema);