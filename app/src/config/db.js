"use strict"

const sqlite3 = require('sqlite3').verbose();
const logger = require('./logger')

// open database
const db = new sqlite3.Database(process.env.DB_FILE, (err) => {
    if (err) {
        return logger.error(err.message);
    }
    logger.info('Connected to the users database.');
});

module.exports = db;