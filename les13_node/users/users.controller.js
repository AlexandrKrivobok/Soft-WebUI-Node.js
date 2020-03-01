const usersService = require('./users.service.js');

class UsersController {
  
  createUser(req, res, next) {
    const user = usersSErvice.createUser(req.body);
    res.json(user);
  }

  returnUser(req, res, next) {

  }
}

module.exports = new UsersController();