/* eslint-disable no-undef */
const express = require('express');
const request = require('supertest');

const app = express();

describe('Testing server routes project', () => {
  it('should create a new project', async () => {
    const res = await request(app)
      .post('/project')
      .send({
        id: 1,
        title: 'test title',
        jobs: 'test job',
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should update project', async () => {
    const res = await request(app)
      .put('/project/1')
      .send({
        id: 1,
        title: 'test title',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete project', async () => {
    const res = await request(app)
      .delete('/project/1')
      .send({
        id: 1,
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe('Testing server routes job', () => {
  it('should create a new job', async () => {
    const res = await request(app)
      .post('/job')
      .send({
        id: 1,
        price: 100,
        status: 'in progress',
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should update job', async () => {
    const res = await request(app)
      .put('/job/1')
      .send({
        id: 1,
        status: 'delivered',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete job', async () => {
    const res = await request(app)
      .delete('/job/1')
      .send({
        id: 1,
      });
    expect(res.statusCode).toEqual(200);
  });
});
