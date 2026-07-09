// NOME SOCIAL

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

// NOME COMPLETO

const nome =
document.getElementById("nomeCompleto");

const statusNome =
document.getElementById("statusNome");

if(nome && statusNome){

    nome.addEventListener("input", () => {

        const valor =
        nome.value.trim();

        const regex =
        /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/;

        if(valor.length === 0){

            statusNome.innerHTML = "";
            return;

        }

        if(regex.test(valor)){

            statusNome.innerHTML =
            "✅ Nome válido";

            statusNome.style.color =
            "#2d9c5c";

        }else{

            statusNome.innerHTML =
            "⚠ Informe nome e sobrenome";

            statusNome.style.color =
            "#d97706";

        }

    });

}

// CPF

const cpf =
document.getElementById("cpf");

const statusCpf =
document.getElementById("statusCpf");

if(cpf && statusCpf){

    cpf.addEventListener("input", () => {

        let valor =
        cpf.value.replace(/\D/g, "");

        valor =
        valor.replace(/^(\d{3})(\d)/, "$1.$2");

        valor =
        valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");

        valor =
        valor.replace(/\.(\d{3})(\d)/, ".$1-$2");

        cpf.value =
        valor.substring(0, 14);

    });

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

}

function validarCPF(cpf){

    cpf = cpf.replace(/\D/g, "");

    if(cpf.length !== 11)
        return false;

    if(/^(\d)\1+$/.test(cpf))
        return false;

    let soma = 0;

    for(let i = 0; i < 9; i++){
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if(resto === 10 || resto === 11)
        resto = 0;

    if(resto !== parseInt(cpf.charAt(9)))
        return false;

    soma = 0;

    for(let i = 0; i < 10; i++){
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if(resto === 10 || resto === 11)
        resto = 0;

    return resto === parseInt(cpf.charAt(10));

}

// E-MAIL

const email =
document.getElementById("email");

const statusEmail =
document.getElementById("statusEmail");

if(email && statusEmail){

    email.addEventListener("blur", () => {

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

}


const emailConfirmacao =
document.getElementById("emailConfirmacao");

const statusConfirmacaoEmail =
document.getElementById("statusConfirmacaoEmail");

if(email && emailConfirmacao && statusConfirmacaoEmail){

    emailConfirmacao.addEventListener("input", () => {

        if(emailConfirmacao.value.length === 0){

            statusConfirmacaoEmail.innerHTML = "";
            return;

        }

        if(email.value === emailConfirmacao.value){

            statusConfirmacaoEmail.innerHTML =
            "✅ Os e-mails conferem";

            statusConfirmacaoEmail.style.color =
            "#2d9c5c";

        }else{

            statusConfirmacaoEmail.innerHTML =
            "❌ Os e-mails não conferem";

            statusConfirmacaoEmail.style.color =
            "#dc2626";

        }

    });

}
