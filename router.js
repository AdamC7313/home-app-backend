const router = require('express').Router();
const User = require('./models/user');
const Task = require('./models/task');
const Project = require('./models/project');
const Appliance = require('./models/appliance');
const passport = require('passport');
const jwt = require('jwt-simple');
const LocalStrategy = require('passport-local');

const tokenForUser = (user) => {
  return jwt.encode(
    {
      sub: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    "bananas"
  );
};

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    const authenticated = username === "Joe" && password === "12345";

    if(authenticated) {
      done(null, { username, password });
    } else { 
      done(null, false);
    }
  })
)


const requireAuth = passport.authenticate('jwt', { session: false });

router.post('auth/signin', requireAuth, (req, res) => {
  res.send({
    token: tokenForUser(req.user)
  });
});

router.get('/auth/signin', (req, res) => {
  const user = req.body;
  const foundUser = User.find({ email: user.email, password: user.password })
  if (foundUser) {
    res.json({
      "token": "token"
    })
  } else {
    res.json('User not found')
  }
});

router.get('/api/users', async (req, res) => {
  const user = req.body.user
  const users = await User.find({})
  res.json(users)
});

router.post('/api/users', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.json(user._id)
});

module.exports = router;