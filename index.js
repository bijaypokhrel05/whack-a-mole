let score = 0;
const scoreDisplay = document.getElementById("score-display");

const holes = document.getElementsByClassName("hole");
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let time = 1000;
let intervalId = null;
startBtn.addEventListener('click', el => {
  intervalId = setInterval(function () {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
  }, time);

  const gameArea = document.getElementById("whack-a-mole");
  gameArea.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.matches(".mole")) {
      clickEvent.target.classList.remove("mole");
      score++;
      scoreDisplay.innerText = score;
    }
  });

  if (score === 20) {
    time = 300;
  }
});

stopBtn.addEventListener('click', el => {
  clearInterval(intervalId);
  score = 0;
  scoreDisplay.innerText = 0;

  Array.from(holes).forEach(hole => hole.classList.remove("mole"));

  document.getElementById("whack-a-mole").removeEventListener("click");

})
