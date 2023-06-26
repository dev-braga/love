function desvia(t){
   var btn = t

   btn.style.position = 'absolute'
   btn.style.left = gerarPosicao( 10, 90)
   btn.style.bottom = gerarPosicao( 10, 90)
}

function sim(){
    window.open('https://wa.me/5571982877132')
}

function gerarPosicao( min, max){
    return (Math.random() * (max - min) + min) + '%'
}

var btn = document.querySelector('.btn')

btn.addEventListener('touchstart', function(event){
    event.preventDefault();
    desvia(this)
})