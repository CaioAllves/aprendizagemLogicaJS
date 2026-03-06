function exibirTexto(tag,texto) {
    let altera = document.querySelector(tag);
    altera.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
}

function verificarChute(){
    let chute = document.querySelector(".container__input").value;
    console.log("Gerei um numero aleatorio que é: "+ numeroSecreto);
    if(chute == numeroSecreto){
        console.log(`Acertou!\nChute = ${chute}\nNumero secreto = ${numeroSecreto}`);
        exibirTexto("h1",`Acertou!\nChute = ${chute}\nNumero secreto = ${numeroSecreto}`);
        exibirTexto("p",`Você descobriu o numero secreto com ${tentativas} ${tentativas==1? 'tentativa' : 'tentativas'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(chute > numeroSecreto){
        console.log(`Errou!\nChute = ${chute}\nNumero secreto = ${numeroSecreto}`);
        exibirTexto("p",`Errou!\nChute = ${chute}\nNumero secreto é menor que o chute`);
        tentativas++;
        limparCampo();
    }else if(chute < numeroSecreto){
        console.log(`Errou!\nChute = ${chute}\nNumero secreto = ${numeroSecreto}`);
        exibirTexto("p",`Errou!\nChute = ${chute}\nNumero secreto é maior que o chute`);
        tentativas++;
        limparCampo();
    }
}

let listaNumerosSorteados = [];
let quantidadeNumeros = 3;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeNumeros +1);
    if(listaNumerosSorteados.length==quantidadeNumeros){
        listaNumerosSorteados=[];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let limpa = document.querySelector("input");
    limpa.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas=1;
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    mensagemInicio();
}

function mensagemInicio() {
    exibirTexto("h1","Jogo do numero secreto");
    exibirTexto("p","Escolha um numero entre 1 e 10");
}

let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;

mensagemInicio();