"use strict"

const winston = require('winston');
const fs = require('fs');
const appRoot = require('app-root-path');


// levels: // https://www.npmjs.com/package/winston
// error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
const loggingLevel = "debug";

// logging file dir
const loggingDir = `${appRoot}/logs`;
if (!fs.existsSync(loggingDir)) { fs.mkdirSync(loggingDir); }

// logging filename
const pad = num => (num > 9 ? "" : "0") + num;
function loggingFileName() {
    const timestamp = new Date(Date.now());
    const year = timestamp.getFullYear();
    const month = pad(timestamp.getMonth() + 1);
    const day = pad(timestamp.getDate());
    const hour = pad(timestamp.getHours());
    const minute = pad(timestamp.getMinutes());
    const second = pad(timestamp.getSeconds());
    return `access-${year}${month}${day}-${hour}${minute}${second}.log`;
};


// logging format
const printFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} | ${level} | ${message}`;
});
const printLogFormat = {
    file: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSS"
        }),
        printFormat, // output format
    ),
    console: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: "HH:mm:ss.SSS"
        }),
        printFormat, // output format
    ),
};

// logger settings
const opts = {

    file: new winston.transports.File({
        filename: loggingFileName(),
        dirname: loggingDir,
        level: loggingLevel,
        format: printLogFormat.file,
    }),
    console: new winston.transports.Console({
        level: loggingLevel,
        format: printLogFormat.console,
    }),
};

// create winston logger
const logger = winston.createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(opts.console);
}

// + morgan + winston settings
logger.stream = {
    write: (message) => logger.info(message),
}


module.exports = logger;