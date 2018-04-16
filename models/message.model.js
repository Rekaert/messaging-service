const mongoose = require('mongoose');
const UserSchema = require('./user');


const MessageSchema = new mongoose.Schema({
    /* id: {
       type: mongoose.Schema.Types.ObjectId,
       default: new mongoose.Types.ObjectId()
     },*/
    text: {
        type: String,
        required: true
    },
    users: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }],
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    read: {
        type: Date,
        default: Date.now
    },
    timesstamps: true
});

// új metódusokat írhatunk hozzá
// Methods
MessageSchema.method({})

// Static Methods
MessageSchema.static({})

// ezt a táblát MessageSchema néven tudjuk elérni
module.exports = mongoose.model('Message', MessageSchema)