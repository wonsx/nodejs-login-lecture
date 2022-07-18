"use strict"

const logger = require('../../config/logger');
const User = require('../../models/User');

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    register: (req, res) => {
        res.render('home/register');
    },
};

const process = {
    login: async (req, res) => {

        const user = new User(req.body);
        const response = await user.login();

        const url = {
            path: "/login",
            method: "Login",
        };
        log(response, url);

        return res.json(response);

    },
    register: async (req, res) => {

        const user = new User(req.body);
        const response = await user.register();

        const url = {
            path: "/register",
            method: "Signup",
        };
        log(response, url);

        return res.json(response);

    },
};

const log = (response, url) => {
    if (response.err) {
        logger.error(`${url.path} ${url.method} : result: ${response.success}, ${response.err}`);
    } else {
        logger.info(`${url.path} ${url.method} : result: ${response.success}, ${response.msg || ""}`);
    }
};

module.exports = {
    output,
    process,
};