// O estado fica em uma variável; a tela é atualizada por uma função.
let xp = 0;
const score = document.querySelector('#score');
function renderScore() {
  score.textContent = String(xp);
}
document.querySelector('#gain').addEventListener('click', () => {
  xp += 10;
  renderScore();
});
document.querySelector('#lose').addEventListener('click', () => {
  xp -= 5;
  renderScore();
});
document.querySelector('#reset').addEventListener('click', () => {
  xp = 0;
  renderScore();
});
