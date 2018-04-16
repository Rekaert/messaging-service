const messageController = require('../controllers/message.controller')
const express = require('express')
const messageRouter = express.Router()

// alaprouting
messageRouter.route('/')
    .get(messageController.list)
    .post(messageController.create)

messageRouter.route('/:id')
    .get(messageController.find)
    .put(messageController.update)
    .delete(messageController.remove)

module.exports = messageRouter