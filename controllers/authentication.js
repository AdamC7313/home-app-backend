const jwt = require("jwt-simple");
const User = require("../models/user");
const keys = require("../config/dev");

const tokenForUser = (user) => {
    return jwt.encode(
      {
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
      },
      keys.TOKEN_SECRET
    );
  };

exports.signin = (req, res) => {
    res.send({ token: tokenForUser(req.user) })
}

exports.signup = (req, res, next) => {
    const email = req.body.username;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }

    User.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(422).send({ error: 'Email is in use' });
            } else {
                const user = new User({
                    email: email,
                    password: password
                });

                user.save()
                    .then(() => {
                        res.json({ token: tokenForUser(user) });
                    })
                    .catch(err => {
                        return next(err);
                    });
            }
        })
        .catch(err => {
            return next(err);
        });
}

exports.currentUser = (req, res) => {
    const user = {
        email: req.user.email,
        token: tokenForUser(req.user)
    }
    res.send(user);
}