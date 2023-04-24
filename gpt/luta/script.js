const attackBtn = document.getElementById('attackBtn');
const resetBtn = document.getElementById('resetBtn');
const fighter1 = document.querySelector('.fighter1');
const fighter2 = document.querySelector('.fighter2');

attackBtn.addEventListener('click', attack);
resetBtn.addEventListener('click', reset);

function attack() {
  // Simulação de ataque
  const fighter1Position = parseInt(getComputedStyle(fighter1).left);
  const fighter2Position = parseInt(getComputedStyle(fighter2).left);

  if (fighter1Position < fighter2Position) {
    fighter1.style.left = (fighter1Position + 50) + 'px';
  } else {
    fighter2.style.left = (fighter2Position + 50) + 'px';
  }
}

function reset() {
  // Reiniciar a posição dos lutadores
  fighter1.style.left = '10px';
  fighter2.style.right = '10px';
}