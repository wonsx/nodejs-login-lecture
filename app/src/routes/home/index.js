"use strict"

const express = require('express');
const router = express.Router();

// controller
const ctrl = require('./home.ctrl');
// routing GET api
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
// routing POST api
router.post('/login', ctrl.process.login);

module.exports = router;