const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  console.log('loop')

const pipePosition = pipe.offsetleft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

  pipe.Style.animation = 'none';
  pipe.Style.left = `${pipePosition}px`;
  
  mario.Style.animation = 'none';
  mario.Style.bottom = `${marioPosition}px`;

  mario.src = 'imagens/game-over.png';
  mario.Style.width = '75px'
  mario.Style.marginLeft = '50px'

  clearInterval(loop);

}

} , 10);
  

document.addEventListener('keydown', jump);   


