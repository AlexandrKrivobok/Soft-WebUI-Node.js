// ORM root object
const Sequelize = require('sequelize');

// NodeJS library for requests (midlvares)
const express = require('express');

// module for parsing res into JSON and save it in req.body
const bodyParser = require('body-parser');

// connection to DB
const sequelize = new Sequelize('testapp', 'root', 'root', {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres',
});

const app = express();

sequelize
  .authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());  // app.use aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaais a midleware that will ALWAYS be executed

app.listen(3002, () => console.log('Server is started'));