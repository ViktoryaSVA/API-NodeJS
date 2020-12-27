const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
require('./app/models/user');

const app = express();
require('./config/express')(app);
require('./config/routes')(app);

mongoose.connect(config.mongoUrl)
  .then(() => app.listen(
    config.appPort,
    () => console.log(`Listening on port ${config.appPort}...`)
))
  .catch(err => console.error(`Error connecting to mongo: ${config.mongoUrl}`, err)) ;
