'use strict';

module.exports = function (err, request, response, next) {
  console.log('Error found');
  const error = err.message ? err.message : err;
  response.status(500).send(error);
  // response.status(500).send({
  //   status: 500,
  //   error: 'error',
  // });
};