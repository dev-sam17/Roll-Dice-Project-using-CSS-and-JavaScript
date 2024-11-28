const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const rollBtn = document.querySelector(".roll");

const randomDice = () => {
  const random1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const random2 = Math.floor(Math.random() * 6) + 1;

  rollDice1(random1);
  rollDice2(random2);
};

const rollDice1 = (random) => {
  dice1.style.animation = "rolling1 4s"; // Unique animation for dice1

  setTimeout(() => {
    switch (random) {
      case 1:
        dice1.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 6:
        dice1.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      case 2:
        dice1.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 5:
        dice1.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 3:
        dice1.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        dice1.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      default:
        break;
    }
    dice1.style.animation = "none";
  }, 4050);
};

const rollDice2 = (random) => {
  dice2.style.animation = "rolling2 3.5s"; // Unique animation for dice2

  setTimeout(() => {
    switch (random) {
      case 1:
        dice2.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 6:
        dice2.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      case 2:
        dice2.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 5:
        dice2.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 3:
        dice2.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        dice2.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      default:
        break;
    }
    dice2.style.animation = "none";
  }, 3550);
};

rollBtn.addEventListener("click", randomDice);
