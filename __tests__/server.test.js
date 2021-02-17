'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing server', () => {
  it('should return 404 on a bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  
  it('should return 404 on a bad method', async () => {
    const response = await request.post('/bar');
    expect(response.status).toEqual(404);
  });
  
  it('should return 500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  it('should return 200 if the name is in the query string', async () => {
    const response = await request.get('/person/?name=Fred');
    expect(response.status).toEqual(200);
  });

  it('should return JSON object with name value if in the query string', async () => {
    const response = await request.get('/person/?name=Fred');
    expect(response.body).toEqual({ name: 'Fred'});
  });
});