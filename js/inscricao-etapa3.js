// SITUAÇÃO DO ENSINO MÉDIO

const situacaoEnsinoMedio = document.getElementById("situacaoEnsinoMedio");

const camposCursando = document.getElementById("camposCursando");

const campoConcluido = document.getElementById("campoConcluido");


if(situacaoEnsinoMedio){

  situacaoEnsinoMedio.addEventListener("change", () => {

    camposCursando.classList.add("oculto");

    campoConcluido.classList.add("oculto");


    if(situacaoEnsinoMedio.value === "cursando"){

      camposCursando.classList.remove("oculto");

    }


    if(situacaoEnsinoMedio.value === "concluido"){

      campoConcluido.classList.remove("oculto");

    }

  });

}


// ANO DE CONCLUSÃO

const anoConclusao = document.getElementById("anoConclusao");

if(anoConclusao){

  anoConclusao.addEventListener("input", () => {

    anoConclusao.value = anoConclusao.value
      .replace(/\D/g, "")
      .substring(0, 4);

  });

}
