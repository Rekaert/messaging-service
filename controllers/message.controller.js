const Message = require('../models/message.model');

module.exports = {

    list: (req, res) => {

        Message.find({}, (err, message) => {
            if (err) {
                res.send(err)
            }
            res.json(message)
        })
    },

    find: (req, res) => {
        Message.findById(req.params.id, (err, message) => {
            if (err) {
                res.send(err)
            }
            res.json(message)
        })
    },

    create: (req, res) => {
        Message.create(req.body, (err, message) => {
            if (err) {
                res.send(err)
            }
            res.json(message)
        })
    },

    update: (req, res) => {
        req.body.updateAt = new Date().toLocaleString();
        Message.findByIdAndUpdate(req.params.id, req.body, (err, message) => {
            if (err) {
                res.send(err)
            }
            res.json(message)
        })
    },

    remove: (req, res) => {
        Message.findByIdAndRemove(req.params.id, (err, message) => {
            if (err) {
                res.send(err)
            }
            res.json(message)
        })
    }
}