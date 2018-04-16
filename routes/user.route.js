const userController = require('../controllers/user.controller')
const express = require('express')
const userRouter = express.Router()

// az összes user lekérése és új user létrehozása
userRouter.route('/')
    .get(userController.list)
    .post(userController.create)
// adott id-jú user lekérése, frissítése, törlése
userRouter.route('/:id')
    .get(userController.find)
    .put(userController.update)
    .delete(userController.remove)

module.exports = userRouter