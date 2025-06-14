function rollDice() {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").src = `images/dice${d1}.svg`;
    document.getElementById("dice2").src = `images/dice${d2}.svg`;
    const total = d1 + d2;
    const result = total >= 11 ? "🎉 Tài!" : "🧧 Xỉu!";
    document.getElementById("result").innerText = `Tổng: ${total} - ${result}`;
  }
  function rollDice() {
    const diceURLs = {
        1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
        2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
        3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
        4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
        5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
        6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
    };

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = diceURLs[dice1];
    document.getElementById("dice2").src = diceURLs[dice2];

    let total = dice1 + dice2;
    let result = total >= 11 ? "🎉 Tài!" : "🧧 Xỉu!";
    document.getElementById("result").innerText = `Tổng: ${total} - ${result}`;
}
