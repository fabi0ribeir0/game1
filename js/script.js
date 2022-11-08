
document.addEventListener('keydown', jump);

function jump() {
    const mar = document.getElementById('mario') 
    mar.classList.add("jump")

    setTimeout(() => {
        mar.classList.remove("jump")
    }, 900);
}

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe')
    const mar = document.getElementById('mario') 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mar).bottom.replace('px', '');


    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    }
    
    
} , 10)

let score = document.querySelector('#score')
score.innerHTML = `SCORE: ${c}`