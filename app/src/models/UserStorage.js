"use strict"

class UserStorage {

    static #users = {
        id: ["aaa", "bbb", "ccc"],
        psword: ["aaa", "bbb", "ccc"],
        name: ["AAA", "BBB", "CCC"],
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const retUser = fields.reduce((retUser, field) => {
            
            if (users.hasOwnProperty(field)) {
                retUser[field] = users[field];
            }
            return retUser;

        }, {});

        return retUser;
    };

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users 의 키값 배열 => [id, psword, name]
        const userInfo = usersKeys.reduce((newInfo, info) => {
            newInfo[info] = users[info][idx];
            return newInfo;
        }, {});

        return userInfo;
    };
};

module.exports = UserStorage;