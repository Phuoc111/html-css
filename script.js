let totalPlays = 0;
let wins = 0;

function play(choice) {
  const x = Math.floor(Math.random() * 6) + 1;
  const y = Math.floor(Math.random() * 6) + 1;
  const sum = x + y;

  document.getElementById("dice1").src = diceSVG(x);
  document.getElementById("dice2").src = diceSVG(y);

  let result = "";
  if ((choice === "tài" && sum >= 11) || (choice === "xỉu" && sum <= 10)) {
    result = `🎉 Bạn thắng! Tổng là ${sum}`;
    wins++;
  } else {
    result = `😢 Bạn thua! Tổng là ${sum}`;
  }

  totalPlays++;
  document.getElementById("result").textContent = result;
  document.getElementById("total").textContent = totalPlays;
  document.getElementById("win").textContent = wins;

  // Phát âm thanh xúc xắc và nhạc nền
  const sound = document.getElementById("sound");
  const dramatic = document.getElementById("dramaticSound");
  
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  if (dramatic) {
    dramatic.currentTime = 0;
    dramatic.play();
  }
}

function diceSVG(num) {
  const links = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
  };
  return links[num];
}
