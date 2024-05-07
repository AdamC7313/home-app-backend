module.exports = (app) => {
  app.post('/auth/signin', (req, res) => {
    console.log('signin');
  }
  );
  app.get('/api/tasks', (req, res, next) => {
    const userID = req.body.user;
    res.status(200).send({ message: userID })
    next();
  });
};