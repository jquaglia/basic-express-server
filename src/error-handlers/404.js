'use strict';

module.exports = function (err, request, response, next) {
  response.status(404).send({
    status: 404,
    error: 'error',
  });
};