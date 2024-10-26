import './style.css';

// const app = document.querySelector<HTMLDivElement>('#app')!;
const player = document.querySelector<HTMLDivElement>('#player')!;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    player.classList.add('walk-right');
  }
  if (event.key === 'ArrowLeft') {
    player.classList.add('walk-left');
  }
  if (event.key === 'ArrowUp') {
    player.classList.add('jump');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    player.classList.remove('walk-right');
  }
  if (event.key === 'ArrowLeft') {
    player.classList.remove('walk-left');
  }
  if (event.key === 'ArrowUp') {
    player.classList.remove('jump');
  }
});
