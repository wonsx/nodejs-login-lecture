"use strict"

const id_ = document.querySelector('#userid'),
    psword_ = document.querySelector('#userpw'),
    btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', login);

function login() {

    if (!id_.value) return alert("아이디를 입력해주십시오.");
    if (!psword_.value) return alert("비밀번호를 입력해주십시오.");

    const req = {
        id: id_.value,
        psword: psword_.value,
    };

    // to server
    fetch("/login", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),

    })
        .then((res) => res.json()) // res.json() is Promise
        .then((res) => {

            if (res.success) {
                location.href = "/";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }

        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};