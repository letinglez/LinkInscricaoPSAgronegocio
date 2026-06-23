// CELULAR

const celular =
document.getElementById("celular");

if(celular){

    celular.addEventListener("input", () => {

        let valor =
        celular.value.replace(/\D/g, "");

        valor =
        valor.replace(/^(\d{2})(\d)/, "($1) $2");

        valor =
        valor.replace(/(\d{5})(\d)/, "$1-$2");

        celular.value =
        valor.substring(0, 15);

    });

}

// CEP

const cep =
document.getElementById("cep");

if(cep){

    cep.addEventListener("blur", async () => {

        const valor =
        cep.value.replace(/\D/g, "");

        if(valor.length !== 8)
            return;

        const resposta =
        await fetch(
            `https://viacep.com.br/ws/${valor}/json/`
        );

        const dados =
        await resposta.json();

        document.getElementById("bairro").value =
        dados.bairro || "";

        document.getElementById("cidade").value =
        dados.localidade || "";

        document.getElementById("estado").value =
        dados.uf || "";

    });

}
