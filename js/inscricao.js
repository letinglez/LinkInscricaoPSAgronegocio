// js/inscricao.js

// ETAPA 1

// Nome Social

const nomeSocial =
document.getElementById("nomeSocial");

const campoNomeSocial =
document.getElementById("campoNomeSocial");

if(nomeSocial && campoNomeSocial){

    nomeSocial.addEventListener("change", () => {

        if(nomeSocial.checked){
            campoNomeSocial.classList.remove("oculto");
        } else {
            campoNomeSocial.classList.add("oculto");
        }

    });

}

// Nome Completo 

const nome =
document.getElementById("nomeCompleto");

const statusNome =
document.getElementById("statusNome");

if(nome && statusNome){

    nome.addEventListener("input", () => {

        // código existente

    });

}
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

// CPF

const cpf = document.getElementById("cpf");
const statusCpf = document.getElementById("statusCpf");

if(cpf && statusCpf){

    cpf.addEventListener("input", () => {

        // código existente

    });

if(cpf && statusCpf){

    cpf.addEventListener("input", () => {

        // código existente

    });

    cpf.addEventListener("blur", () => {

        // código existente

    });

}
        // código existente

    });

}
    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2");

    cpf.value = valor.substring(0, 14);

});

function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, "");

    if(cpf.length !== 11)
        return false;

    if(/^(\d)\1+$/.test(cpf))
        return false;

    let soma = 0;

    for(let i = 0; i < 9; i++)
        soma += parseInt(cpf.charAt(i)) * (10 - i);

    let resto = (soma * 10) % 11;

    if(resto === 10 || resto === 11)
        resto = 0;

    if(resto !== parseInt(cpf.charAt(9)))
        return false;

    soma = 0;

    for(let i = 0; i < 10; i++)
        soma += parseInt(cpf.charAt(i)) * (11 - i);

    resto = (soma * 10) % 11;

    if(resto === 10 || resto === 11)
        resto = 0;

    return resto === parseInt(cpf.charAt(10));
}

cpf.addEventListener("blur", () => {

    if(validarCPF(cpf.value)){

        statusCpf.innerHTML =
        "✅ CPF válido";

        statusCpf.style.color =
        "#2d9c5c";

    }else{

        statusCpf.innerHTML =
        "❌ CPF inválido";

        statusCpf.style.color =
        "#dc2626";

    }

});

// E-MAIL

const email =
document.getElementById("email");

const statusEmail =
document.getElementById("statusEmail");

if(email && statusEmail){

    email.addEventListener("blur", () => {

        // código existente

    });

}
    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email.value)){

        statusEmail.innerHTML =
        "✅ E-mail válido";

        statusEmail.style.color =
        "#2d9c5c";

    }else{

        statusEmail.innerHTML =
        "❌ E-mail inválido";

        statusEmail.style.color =
        "#dc2626";

    }

});


// ETAPA 2

// =====================
// CELULAR
// =====================

const celular =
document.getElementById("celular");

if(celular){

    celular.addEventListener("input", () => {

        let valor =
        celular.value.replace(/\D/g, "");

        valor =
        valor.replace(/^(\d{2})(\d)/g, "($1) $2");

        valor =
        valor.replace(/(\d{5})(\d)/, "$1-$2");

        celular.value =
        valor.substring(0, 15);

    });

}

// =====================
// CEP
// =====================

const cep = document.getElementById("cep");

if(cep){

    cep.addEventListener("blur", async () => {

        const valor =
        cep.value.replace(/\D/g, "");

        if(valor.length !== 8)
            return;

        const resposta =
        await fetch(`https://viacep.com.br/ws/${valor}/json/`);

        const dados =
        await resposta.json();

        document.getElementById("bairro").value =
        dados.bairro;

        document.getElementById("cidade").value =
        dados.localidade;

        document.getElementById("estado").value =
        dados.uf;

    });

}
