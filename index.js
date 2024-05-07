const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
require('./services/passport');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize())

router(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});