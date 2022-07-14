"use strict"

const fs = require('fs').promises;
const DBFILE = "./src/databases/logindb/users.json";

class UserStorage {

    static #getUsers(data, isAll, fields) {

        const users = JSON.parse(data);
        if (isAll) return users;

        const retUser = fields.reduce((retUser, field) => {
            
            if (users.hasOwnProperty(field)) {
                retUser[field] = users[field];
            }
            return retUser;

        }, {});

        return retUser;

    };

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

   static getUsers(isAll, ...fields) {

        return fs.readFile(DBFILE) // is Promise
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);

    };

    static getUserInfo(id) {

        return fs.readFile(DBFILE) // is Promise
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);

    };

    static async addUserInfo(userInfo) {

        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }

        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile(DBFILE, JSON.stringify(users));
        return { success: true };
    };
};

module.exports = UserStorage;