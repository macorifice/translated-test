const mysql = require('mysql2');
const config = require('./config');

const conn = mysql.createConnection({
  host: config.dbhost,
  user: config.dbusername,
  password: config.dbpassword,
  database: config.db,
  insecureAuth: true,
});

module.exports = conn;
