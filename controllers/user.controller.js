const User = require('../models/user.model')

module.exports = {

    list: (req, res) => {

        User.find({}, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user)
        })
    },

    find: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user)
        })
    },

    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user)
        })
    },

    update: (req, res) => {
        req.body.updateAt = new Date().toLocaleString();
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user)
        })
    },

    remove: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user)
        })
    }
}

/* Ha a fenti kód nem működik:
const User = require('../models/user.model');

exports.setUserInfo = function setUserInfo(request) {
  const getUserInfo = {
    _id: request._id,
    email: request.email,
    password: request.password
  };

//= =======================================
// User Routes
//= =======================================
exports.viewProfile = function (req, res, next) {
  const userId = req.params.userId;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    const userToReturn = setUserInfo(user);

    return res.status(200).json({ user: userToReturn });
  });
};
*/