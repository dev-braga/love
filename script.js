
var btn = document.querySelector('.btn-nao');

function desvia(){

   btn.style.position = 'absolute';
   btn.style.left = gerarPosicao( 10, 80);
   btn.style.bottom = gerarPosicao( 10, 80);

}

function sim(){
    window.open('https://wa.me/5571982877132');
}

function gerarPosicao( min, max){
    return (Math.round((Math.random() * (max - min) + min))) + '%';
    
}

function isMobile(){

    setInterval( function(){
        btn.style.position = 'absolute';
        btn.style.left = gerarPosicao( 10, 90);
        btn.style.bottom = gerarPosicao( 10, 90);

    }, 400)
}

// Pegar o tamanho da tela e setar para o botão para sempre fugi caso o usuário esteja usando o celular.

var width = window.innerWidth

if(width <= 700){
   isMobile();
}