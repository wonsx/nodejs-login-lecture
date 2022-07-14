"use strict"

const users = {
    id: ["aaa", "bbb", "ccc"],
    psword: ["aaa", "bbb", "ccc"],
};

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        // console.log("process.login", id, psword);

        if (users.id.includes(id)) {

            const idx = users.id.indexOf(id);

            if (users.psword[idx] === psword) {

                return res.json({
                    success: true,
                });

            } else {
                
                return res.json({
                    success: false,
                    msg: "로그인에 실패하셨습니다.",
                });
            }
        }
    },
};

module.exports = {
    output,
    process,
};