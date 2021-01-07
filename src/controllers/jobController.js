/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
const db = require('../config/db');

exports.getJobs = (req, res) => {
  const sql = 'SELECT * FROM job';
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Jobs lists retrieved successfully',
    });
  });
};

exports.getJob = (req, res) => {
  const { id } = req.body;

  const sql = `SELECT * FROM job WHERE ID = ${id}`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Job retrieved successfully',
    });
  });
};

exports.addJob = (req, res) => {
  const sql = 'INSERT INTO job(price, status) VALUES (?)';
  const values = [
    req.body.price,
    req.body.status.toLowerCase(),
  ];
  db.query(sql, [values], (err, data) => {
    if (err) throw err;
    res.json({
      status: 201,
      data,
      message: 'New job added successfully',
    });
  });
};

exports.updJob = (req, res) => {
  const { id, status } = req.body;

  const sql = `UPDATE job SET STATUS = ${status}  WHERE ID = ${id};`;

  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Job updated successfully',
    });
  });
};

exports.delJob = (req, res) => {
  const { id } = req.body;

  const sql = `DELETE FROM job WHERE ID = ${id};`;

  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Job removed successfully',
    });
  });
};

exports.filterJob = (req, res) => {
  const { status } = req.body;

  const sql = `
  SELECT id, creationDate, price, status
  FROM   job
  WHERE  STATUS IN (${status.toLowerCase()}`;

  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Job filtered retrieved successfully',
    });
  });
};

exports.orderJob = (req, res) => {
  const { price, creationDate } = req.body;

  let sql;

  if (price && !creationDate) {
    sql = 'SELECT * FROM job ORDER BY price';
  }

  if (!price && creationDate) {
    sql = 'SELECT * FROM job ORDER BY creationDate';
  }

  if (price && creationDate) {
    sql = 'SELECT * FROM job ORDER BY price, creationDate';
  }

  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Jobs ordered retrieved successfully',
    });
  });
};
