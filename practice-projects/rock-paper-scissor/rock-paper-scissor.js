let score = JSON.parse(localStorage.getItem('score')) || {win:0, lose:0, tie:0};

function playGame (playerMove) {
  comPick = computerPick();
  let result = '';

  if (playerMove === 'rock') {
    if (comPick === 'rock')
      result = 'Tie';
    else if (comPick === 'scissors')
      result = 'Win';
    else if (comPick === 'paper')
      result = 'Lose';
  }

  else if (playerMove === 'paper') {
    if (comPick === 'rock')
      result = 'Win';
    else if (comPick === 'scissors')
      result = 'Lose';
    else if (comPick === 'paper')
      result = 'Tie';
  }

  else if (playerMove === 'scissors') {
    if (comPick === 'rock')
      result = 'Lose';
    else if (comPick === 'scissors')
      result = 'Tie';
    else if (comPick === 'paper')
      result = 'Win';
  }

  if (result === 'Win')
    score.win += 1;
  else if (result === 'Lose')
    score.lose += 1;
  else  
    score.tie += 1;

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-move')
    .innerHTML = 
      `You picked 
      <img class="icon" src="thumbnail/${playerMove}-emoji.png">
      <br>
      Computer picked 
      <img class="icon" src="thumbnail/${comPick}-emoji.png">`;
  
  document.querySelector('.js-result')
    .innerHTML = `You ${result}`;
}

function computerPick () {
  let choice = '';
  const randomNum = Math.random();

  if (randomNum>=0 && randomNum<1/3) {
    choice = 'rock';

  } else if (randomNum>=1/3 && randomNum<2/3) {
    choice = 'paper';
  
  }  else if (randomNum>=2/3 && randomNum<1) {
    choice = 'scissors';
  }

  return choice;
}

function updateScore () {
  document.querySelector('.js-score')
    .innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}