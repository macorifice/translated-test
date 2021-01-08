/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

describe('Testing server ping', () => {
  test('It should respond with a message', () => {
    request(app)
      .get('/')
      .expect(200);
  });
});

describe('Testing server ping', () => {
  test('It should respond with a message', () => {
    request(app)
      .get('/')
      .expect(200);
  });
});

describe('Testing server routes project', () => {
  it('shouldn t create a new project', async () => {
    request(app)
      .post('/project')
      .send({
        title: 'test',
        jobs: '',
      })
      .expect(400);
  });

  it('should create a new project', async () => {
    request(app)
      .post('/project')
      .send({
        title: 'test',
        jobs: 'test job',
      })
      .expect(201);
  });

  it('should update project', async () => {
    request(app)
      .put('/project/1')
      .send({
        id: 1,
        title: 'test title',
      })
      .expect(200);
  });

  it('should delete project', async () => {
    request(app)
      .delete('/project/1')
      .expect(200);
  });
});

describe('Testing server routes job', () => {
  it('should create a new job', async () => {
    request(app)
      .post('/job')
      .send({
        id: 1,
        price: 100,
        status: 'in progress',
      })
      .expect(201);
  });

  it('should update job', async () => {
    request(app)
      .put('/job/1')
      .send({
        id: 1,
        status: 'delivered',
      })
      .expect(200);
  });

  it('should delete job', async () => {
    request(app)
      .delete('/job/1')
      .expect(200);
  });
});
