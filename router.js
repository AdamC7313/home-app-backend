//Tools
const router = require('express').Router();
const passport = require('passport');

//Controllers
const Authentication = require('./controllers/authentication');
const taskList = require('./controllers/taskList');
const projectList = require('./controllers/projectList')

//Auth Strategies

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

//Sign in routes

router.post('/auth/signin', requireSignin, Authentication.signin);
router.post('/auth/signup', Authentication.signup);
router.post('/auth/current_user', requireAuth, Authentication.currentUser);

//Task routes
router.post('/addTask', taskList.addTask);
router.get('/getTasks', taskList.getTasks);
router.delete('/deleteTask/:id', taskList.deleteTask)
router.put('/completeTask/:id', taskList.completeTask)

//Project routes
router.get('/getProjects', projectList.getProjects);
router.post('/addProject', projectList.addProject);
router.get('/getSingleProject/:id', projectList.getSingleProject);
router.delete('/deleteProject/:id', projectList.deleteProject);

module.exports = router;