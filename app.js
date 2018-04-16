const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./config/database')
const helmet = require('helmet')
const morgan = require('morgan')
const fs = require('fs')


const messageRouter = require('./routes/message.route')
const userRouter = require('./routes/user.route')
const app = express()


// Csatlakozás a MongoDB-hez
mongoose.connect(db.uri, db.options).then(
    () => {
        console.log('MongoDB connected.')
    },
    err => {
        console.error('MongoDB error.:' + err)
    }
)

// Url kódolású kérések összefűzése
app.use(bodyParser.urlencoded({
    extended: false
}))

// JSON-ban érkező kérések összefűzése
app.use(bodyParser.json())

// 4xx és 5xx státuszkódú válaszok loggolása
app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }

}))

// alap security beállítása
app.use(helmet())

// Az oldal automatikus frissülésének beállítása
if (app.get('env') === 'development') {
    const browserSync = require('browser-sync')
    const config = {
        files: ['views/**/*.html'],
        logLevel: 'info',
        logSnippet: false,
        reloadDelay: 3000,
        reloadOnRestart: true
    }
    const bs = browserSync(config)
    app.use(require('connect-browser-sync')(bs))
}

// Routing szabályok beállítása - API routok
app.use('/message', messageRouter)
app.use('/user', userRouter)

// http server indítása
app.listen('3000');