'use strict';

module.exports = function (err, request, response, next) {
  response.status(500).send({
    status: 500,
    error: 'error',
  });
};