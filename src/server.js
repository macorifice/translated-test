/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'It works!' });
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.log('Caught exception: ', err);
});
