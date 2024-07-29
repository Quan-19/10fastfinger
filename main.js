const buttonReset = document.getElementById("btReset");
const buttonStart = document.getElementById("btStart");
let inputWord = document.getElementById("ipWord");
let point = document.getElementById("score");
let timeCountDown = document.getElementById("time");
let wordRandom = document.getElementById("word");

const words = [
  "Đồng chí",
  "Việt Bắc",
  "Ai đã đặt tên cho dòng sông",
  "Người lái đò sông Đà",
  "Tây tiến",
  "Lượm",
  "Vợ chồng A Phủ",
  "Hồn Trương Ba da hàng thịt",
  "Sóng",
  "Chiếc thuyền ngoài xa",
];
let currentWord = "";
let score = 0;
let time = 60;
let intervalId;

function startGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordRandom.textContent = currentWord;
  inputWord.value = "";
  inputWord.focus();

  const countdownTimer = () => {
    time--;
    timeCountDown.textContent = `Time: ${time} seconds`;
    if (time == 0) {
      clearTimeout(intervalId);
      alert("Bạn đã hết thời gian");
    } else {
      intervalId = setTimeout(countdownTimer, 1000);
    }
  };

  intervalId = setTimeout(countdownTimer, 1000);
}
function resetGame() {
  score = 0;
  time = 60;
  point.textContent = `score: ${score}`;
  timeCountDown.textContent = `time: ${time} second`;
}

buttonReset.onclick = resetGame;
buttonStart.onclick = startGame;

inputWord.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    if (inputWord.value == currentWord) {
      score++;
      point.textContent = `Score: ${score}`;
      currentWord = words[Math.floor(Math.random() * words.length)];
      wordRandom.textContent = currentWord;
      inputWord.value = "";
    } else {
      score--;
      point.textContent = `Score: ${score}`;
    }
  }
});
