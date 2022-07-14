"use strict"

const UserStorage = require('./UserStorage');

class User {
    
    constructor(body) {
        this.body = body;
    };

    login() {

        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);

        const response = {};
        if (id) {
            if ((id === body.id) && (psword === body.psword)) {
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

};

module.exports = User;