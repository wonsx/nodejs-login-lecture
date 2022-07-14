"use strict"

const fs = require('fs').promises;

class UserStorage {

    static #getUserInfo(data, id) {

        const users = JSON.parse(data);

        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users 의 키값 배열 => [id, psword, name]
        const userInfo = usersKeys.reduce((newInfo, info) => {
            newInfo[info] = users[info][idx];
            return newInfo;
        }, {});

        return userInfo;

    };

   static getUsers(...fields) {
        // const users = this.#users;
        const retUser = fields.reduce((retUser, field) => {
            
            if (users.hasOwnProperty(field)) {
                retUser[field] = users[field];
            }
            return retUser;

        }, {});

        return retUser;
    };

    static getUserInfo(id) {

        return fs.readFile("./src/databases/logindb/users.json") // is Promise
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);

    };

    static addUserInfo(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    };
};

module.exports = UserStorage;