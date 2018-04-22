const User = require('../models/user.model')

module.exports = {
    getUser: (req, res) => {
        res.json({
            user: req.user
        })
    },
    // új user létrehozása
    register: (req, res, next) => {
        User.register(new User({
            username: req.body.username,
            email: req.body.email,
        }), req.body.password, (err) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.redirect('/')
            res.json({
                message: 'Succesfull registration!'
            })
        });
    },

    login: (req, res) => {
        res.redirect('/')
        res.json({
            user: req.user,
            message: 'Succesfull login!'
        })
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }

}