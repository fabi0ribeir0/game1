
document.addEventListener('keydown', jump);
let pontos = 0


function jump() {
    pontos += 100
    const mario = document.getElementById('mario') 
    mario.classList.add("jump")

    let score = document.getElementById('pontos')
    score.innerHTML = pontos

    setTimeout(() => {
        mario.classList.remove("jump")
    }, 900);
}

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe')
    const mario = document.getElementById('mario') 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 70) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'imagens/game-over.gif'

        clearInterval(loop)
    }
    
    
} , 10)
