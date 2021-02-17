'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');

app.use(express.json());

// ========= Routes =========
app.get('/person', logger, validator, getPersonHandler);

app.use('*', errorHandler404);
app.use(errorHandler500);

// ========= Route Handlers =========
function getPersonHandler(request, response) {
  const person = {
    name: request.query.name,
  };
  response.json(person);
}

module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on port : ' + port);
    });
  },
};