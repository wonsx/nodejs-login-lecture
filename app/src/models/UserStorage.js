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
    }
};

module.exports = UserStorage;