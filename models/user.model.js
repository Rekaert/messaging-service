const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
require('mongoose-type-email');
const MessageSchema = require('./message.model');


const UserSchema = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        lowecase: true,
        unique: true,
        validate: {
            validator: (email) => email.length > 2,
            message: 'Email must be longer than 2 characters'
        },
        required: [true, 'Email is required']
    },

    password: {
        type: String,
        validate: {
            validator: 'matches',
            arguments: /^[a-zA-Z\-]+$/i,
            message: 'Password is invalid'
        },
        required: [true, 'Password is required']
    },
});


module.exports = mongoose.model('User', UserSchema);