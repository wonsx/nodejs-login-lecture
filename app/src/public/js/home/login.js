"use strict"

const id_ = document.querySelector("#userid"),
    psword_ = document.querySelector("#userpw"),
    btnLogin_ = document.querySelector("#btn-login");

btnLogin_.addEventListener('click', login);

function login() {
    const req = {
        id: id_.value,
        psword: psword_.value,
    };

    // to server

};