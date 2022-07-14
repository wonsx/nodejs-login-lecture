"use strict"

const id = document.querySelector('#userid'),
    psword = document.querySelector('#userpw'),
    btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
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
                alert(res.msg);
            }

        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};