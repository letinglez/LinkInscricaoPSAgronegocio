// js/inscricao.js

const nomeSocial =
document.getElementById("nomeSocial");

const campoNomeSocial =
document.getElementById("campoNomeSocial");

nomeSocial.addEventListener("change", () => {

    if(nomeSocial.checked){
        campoNomeSocial.classList.remove("oculto");
    } else {
        campoNomeSocial.classList.add("oculto");
    }

});

const nome =
document.getElementById("nomeCompleto");

const statusNome =
document.getElementById("statusNome");

nome.addEventListener("input", () => {

    const valor = nome.value.trim();

    const regex =
    /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/;

    if(valor.length === 0){

        statusNome.innerHTML = "";
        return;

    }

    if(regex.test(valor)){

        statusNome.innerHTML = "✅ Nome válido";
        statusNome.style.color = "#2d9c5c";

    } else {

        statusNome.innerHTML =
        "⚠ Informe nome e sobrenome";

        statusNome.style.color =
        "#d97706";

    }

});
