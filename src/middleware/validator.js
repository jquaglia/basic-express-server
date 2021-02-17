'use strict';

module.exports = function (request, response, next) {
  const person = {
    name: request.query.name,
  };
  if (!person.name) {
    next('No name on query');
    // response.status(500).send({
    //   status: 500,
    //   error: 'No name',
    // });
  } else {
    next();
  }
};