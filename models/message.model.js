const mongoose = require('mongoose');
const UserSchema = require('./user.model');


const MessageSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },

    sender: {
        type: String,
        /*
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true*/
    },
    mailingTo: {
        type: String,
        /* type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true*/
    },
    read: {
        type: Date,
        default: Date.now
    },

});

// új metódusokat írhatunk hozzá
// Methods
MessageSchema.method({})

// Static Methods
MessageSchema.static({})

// ezt a táblát MessageSchema néven tudjuk elérni
module.exports = mongoose.model('Message', MessageSchema)