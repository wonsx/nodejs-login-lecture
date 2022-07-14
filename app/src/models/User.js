"use strict"

const UserStorage = require('./UserStorage');

class User {
    
    constructor(body) {
        this.body = body;
    };

    login() {

        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);

        const response = {};
        if (id) {
            if ((id === client.id) && (psword === client.psword)) {
                response.success = true;
            } else {
                response.success = false;
                response.msg = "암호를 확인하시기 바랍니다."
            }
        } else {
            response.success = false;
            response.msg = "아이디를 확인하시기 바랍니다.";
        }

        return response;

    };

    register() {

        const client = this.body;
        const response = UserStorage.addUserInfo(client);
        return response;
    };
};

module.exports = User;