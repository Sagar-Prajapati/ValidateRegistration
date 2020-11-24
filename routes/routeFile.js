const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerFile');
const validate = require('../util/validateData');

router.post('/register',validate,controller.registerUser);

router.get('/list-users',controller.listUsers);

module.exports = router;