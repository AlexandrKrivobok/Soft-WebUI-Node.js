const { Router } = require('express');
const usersController = require('./users.controller');
const router = new Router();

router.get('/', usersController.returnUser);

router.post('/', usersController.createUser);

module.exports = router;