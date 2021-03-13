const circles = document.querySelectorAll('.ball');
const optionsContainer = document.querySelector('#options-container');
const rightAnswerColor = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer-text');
const resetButton = document.querySelector('#reset-game');
let gameAnswer;

function resetGame() {
  chooseAnswer();
  setRandomColors();
  setRightAnswer();
  const resetAnswer = document.querySelector('#selectAnswer');
  if (resetAnswer !== null) {
    document.querySelector('#selectAnswer').id = '';
  }
  answerText.innerText = '';
}

function verifyAnwser() {
  const selectedAnwser = document.querySelector('#selectAnswer');
  if (selectedAnwser.style.backgroundColor === gameAnswer.style.backgroundColor) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!'
  }
}

function setRightAnswer() {
  const rightAnswer = circles[Math.floor((Math.random()*circles.length))];
  rightAnswerColor.innerHTML = rightAnswer.style.backgroundColor;
  gameAnswer = rightAnswer;
}

function chooseAnswer() {
  optionsContainer.addEventListener('click', () => {
    const answer = event.target;
    const answerLimiter = document.querySelector('#selectAnswer');
    if (answerLimiter === null && answer.classList.contains('ball')) {
      answer.id = 'selectAnswer';
      verifyAnwser();
    }
  });
}

function generateRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

function setRandomColors() {
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].style.backgroundColor = generateRandomColor();
  }
}

resetButton.addEventListener('click', resetGame);
chooseAnswer();
setRandomColors();
setRightAnswer();
