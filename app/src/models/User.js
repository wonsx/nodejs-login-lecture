"use strict"

const UserStorage = require('./UserStorage');

class User {
    
    constructor(body) {
        this.body = body;
    };

    async login() {

        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);

            const response = {};
            if (user) {
                if ((user.id === client.id) && (user.psword === client.psword)) {
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

        } catch (err) {
            return { success: false, err };
        }

    };

    async register() {

        const client = this.body;
        try {
            const response = await UserStorage.addUserInfo(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    };
};

module.exports = User;