const db = require('../config/db');

exports.getProjects = (req, res) => {
  const sql = 'SELECT * FROM project';
  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        status: 400,
        message: err,
      });
    }
    res.json({
      status: 200,
      data,
      message: 'Project lists retrieved successfully',
    });
  });
};

exports.getProject = (req, res) => {
  const sql = `SELECT * FROM project WHERE ID = ${req.params.id}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        status: 400,
        message: err,
      });
    }
    res.json({
      status: 200,
      data,
      message: 'Project retrieved successfully',
    });
  });
};

exports.addProject = (req, res) => {
  if (!req.body.jobs) {
    res.json({
      status: 400,
      message: 'The project must contain at least one job',
    });
  } else {
    const sql = 'INSERT INTO project(title, jobs) VALUES (?)';
    const values = [
      req.body.title,
      req.body.jobs,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) {
        res.json({
          status: 400,
          message: err,
        });
      }
      res.json({
        status: 201,
        data,
        message: 'New project added successfully',
      });
    });
  }
};

exports.updProject = (req, res) => {
  const { id, title } = req.body;

  const sql = `UPDATE project SET title = '${title}' WHERE id = ${id};`;

  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        status: 400,
        message: err,
      });
    }
    res.json({
      status: 200,
      data,
      message: 'Project updated successfully',
    });
  });
};

exports.delProject = (req, res) => {
  const sql = `DELETE FROM project WHERE ID = ${req.params.id};`;

  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        status: 400,
        message: err,
      });
    }
    res.json({
      status: 200,
      data,
      message: 'Project removed successfully',
    });
  });
};
