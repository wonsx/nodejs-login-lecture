"use strict"

// modules
const express = require('express');
const app = express();


// routing
const home = require('./routes/home');

// app settings
app.set('views', './views');
app.set('view engine', 'ejs');

// asign middle-ware
app.use('/', home);

module.exports = app;