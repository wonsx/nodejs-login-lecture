"use strict"

const express = require('express');
const router = express.Router();

// controller
const ctrl = require('./home.ctrl');
// routing
router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router;