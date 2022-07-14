"use strict"

const db = require('../config/db');

class UserStorage {

    static getUserInfo(id) {

        return new Promise((resolve, reject) => {

            const query = "SELECT * FROM users WHERE id = ?;";
            db.get(query, [id], (err, result) => {
                if (err) reject(`${err}`);
                else resolve(result);
            });
        });
    };

    static async addUserInfo(userInfo) {

        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (id, name, psword) VALUES (?, ?, ?);";
            db.run(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    };
};

module.exports = UserStorage;