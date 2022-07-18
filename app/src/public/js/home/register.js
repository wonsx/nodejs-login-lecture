"use strict"

const id_ = document.querySelector('#userid'),
    name_ = document.querySelector('#username'),
    psword_ = document.querySelector('#userpw'),
    pswordConfirm_ = document.querySelector('#userpw-confirm'),
    btnResister = document.querySelector('#btn-register');

btnResister.addEventListener('click', register);

function register() {

    if (!id_.value) return alert("아이디를 입력해주십시오.");
    if (!name_.value) return alert("이름을 입력해주십시오.");
    if (!psword_.value) return alert("비밀번호를 입력해주십시오.");
    if (psword_.value !== pswordConfirm_.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id_.value,
        name: name_.value,
        psword: psword_.value,
    };

    // to server
    fetch("/register", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),

    })
        .then((res) => res.json()) // res.json() is Promise
        .then((res) => {

            if (res.success) {
                location.href = "/login";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }

        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
};