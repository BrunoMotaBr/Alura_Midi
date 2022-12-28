function reproduzir(seletorAudio){

    const elemento = document.querySelector(seletorAudio);
    if(elemento && elemento.localName === "audio"){
        elemento.play();
    }
    else{
        alert("Não é um audio!!!");
    }
}

const botoes = document.querySelectorAll('.tecla');
console.log(botoes[0])
for(let i = 0; i < botoes.length; i++){
    const instrumento = botoes[i].classList[1];
    botoes[i].onclick = function(){
        reproduzir("#som_" + instrumento);
    };
        botoes[i].onkeydown = function(event){
            if(event.code === "Space" || event.code === "Enter"){
            botoes[i].classList.add('ativa');
            }
    }
    botoes[i].onkeyup = function(){
        botoes[i].classList.remove('ativa')
    }
}

