const router = require('express').Router();
const User = require('./models/user');
const Task = require('./models/task');
const Project = require('./models/project');
const Appliance = require('./models/appliance');
const passport = require('passport');
const jwt = require('jwt-simple');
const LocalStrategy = require('passport-local');
const express = require('express');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

//Sign in routes

router.post('/auth/signin', requireSignin, Authentication.signin);
router.post('/auth/signup', Authentication.signup);

module.exports = router;