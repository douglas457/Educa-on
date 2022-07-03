let nome = document.getElementById("nome")
let senha = document.getElementById("senha")


nome.onfocus = function () {
    nome.placeholder = "";
}

function focusout () {
    nome.placeholder = "Matrícula";
}

senha.onfocus = function () {
    senha.placeholder = "";
}

function focusout2 () {
    senha.placeholder = "Senha";
}