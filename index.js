function roller() {
  const inp = document.getElementById('myinput').value;
  const roll = document.getElementById('roll');
  const result = document.getElementById('diceResult');
  const images = document.getElementById('diceImages');
  let dices = [];
  let images1 = [];
  for (let i = 0; i < inp; i++) {
    rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
    dices.push(rand);
    result.textContent = dices.join(',');
    images1.push(`<img src="images/dice${rand}.jpg" alt="dice${rand}">`);
    images.innerHTML = images1.join('');
  }
}
