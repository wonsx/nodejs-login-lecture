"use strict"

const sqlite3 = require('sqlite3').verbose();

// open database
const db = new sqlite3.Database(process.env.DB_FILE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the users database.');
});

module.exports = db;