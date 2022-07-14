"use strict"

// modules
const express = require('express');
const app = express();


// routing
const home = require('./src/routes/home');

// app settings
app.set('views', './src/views');
app.set('view engine', 'ejs');

// asign middle-ware
app.use('/', home);

module.exports = app;