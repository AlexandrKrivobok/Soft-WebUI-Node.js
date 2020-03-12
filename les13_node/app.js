// const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users/users.routes.js')

// const sequelize = new Sequelize('testapp', 'root', 'root', {
//     host: '127.0.0.1',
//     port: 5432,
//     dialect: 'postgres',
// });

const app = express();

// sequelize
//     .authenticate()
//     .then(() => console.log('DB connected'))
//     .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/users', usersRouter);

// /users?name=Alan&age=20
app.put('/cats/:id/account/:accID', (req, res, next) => {
  console.log(req.params);

  res.statusCode = 200;
  res.setHeader('User', 'Some user');

  res.json({
    params: req.params,
    queryObject: req.query,
    body: req.body,
    headers: req.headers,
  });
});

app.listen(3002, () => console.log('Server is started'));