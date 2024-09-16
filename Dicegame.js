// This is a pig game..lollll.... forgive me the name sounds hilarious and the rules of the game are as follows:

// 1. When a player rolls the dice a 1 the player looses his current score
// 2. When a player rolls a double 6 the player looses his current score
// 3. The default winning score is 100 but can be set to another value if the player wishes to..

let roundscore = 0;
document.querySelector(".current_score_1").textContent = 0;
document.querySelector(".current_score_2").textContent = 0;
document.querySelector("#score_1").textContent = 0;
document.querySelector("#score_2").textContent = 0;
let diceDOM_1 = document.querySelector(".dice_img_1");
let diceDOM_2 = document.querySelector(".dice_img_2");
let activeplayer = 1;
let scores = [0, 0, 0];
let winningScore = 100;

document
  .querySelector(".player_" + activeplayer + "_div ")
  .classList.add("active");

document.querySelector(".roll_dice").addEventListener("click", function () {
  let rand_dice = Math.floor(Math.random() * 6) + 1;
  let random_dice = Math.floor(Math.random() * 6) + 1;
  // console.log(rand_dice);
  // console.log(random_dice);
  diceDOM_1.src = "./images/dice-" + rand_dice + ".jpg";
  diceDOM_2.src = "./images/dice-" + random_dice + ".jpg";
  document.querySelector(".dice_img_holder").style.display = "flex";

  diceDOM_1.style.display = "flex";
  diceDOM_2.style.display = "flex";

  if (rand_dice == 1 || random_dice == 1) {
    document.querySelector(".current_score_" + activeplayer).textContent = 0;
    changeActiveplayer();

    roundscore = 0;
    document.querySelector(
      ".current_score_" + activeplayer
    ).textContent = roundscore;
  } else if (random_dice == 6 && rand_dice == 6) {
    document.querySelector(".current_score_" + activeplayer).textContent = 0;
    changeActiveplayer();

    roundscore = 0;
    document.querySelector(
      ".current_score_" + activeplayer
    ).textContent = roundscore;
  } else {
    roundscore += rand_dice += random_dice;
    document.querySelector(
      ".current_score_" + activeplayer
    ).textContent = roundscore;
  }
});

function changeActiveplayer() {
  document
    .querySelector(".player_" + activeplayer + "_div ")
    .classList.remove("active");
    activeplayer == 1 ? (activeplayer = 2) : (activeplayer = 1);
  document
    .querySelector(".player_" + activeplayer + "_div ")
    .classList.add("active");
}

document.querySelector(".hold_dice").addEventListener("click", function () {
  let currentScore = document.querySelector(".current_score_" + activeplayer)
    .textContent;
  scores[activeplayer] += Number(currentScore);

  document.querySelector("#score_" + activeplayer).textContent =
    scores[activeplayer];
  determineWinner();
});
document.querySelector(".new_btn").addEventListener("click", function () {
  roundscore = 0;
  document.querySelector(".winningScore").value = "";
  document.querySelector(".current_score_1").textContent = 0;
  document.querySelector(".current_score_2").textContent = 0;
  document.querySelector("#score_1").textContent = 0;
  document.querySelector("#score_2").textContent = 0;
  document.querySelector(".dice_img_holder").style.display = "none";
  document.querySelector(".roll_dice").style.display = "flex";

  scores = [0, 0, 0];

  document.querySelector("#player_" + activeplayer).textContent =
    "Player" + activeplayer;
  document
    .querySelector(".player_" + activeplayer + "_div ")
    .classList.remove("active");
    activeplayer = 1;
  document
    .querySelector(".player_" + activeplayer + "_div ")
    .classList.add("active");
  document.querySelector(".def_winningScore").textContent = 100;
});
function determineWinner() {
  let input = document.querySelector(".winningScore").value;
  if(input == ""){
    winningScore = 100;
  }else{
    winningScore = input;
  }
  if (scores[activeplayer] >= winningScore) {
    document.querySelector("#player_" + activeplayer).textContent =
      "Winner !!!";
    document.querySelector(".current_score_1").textContent = 0;
    document.querySelector(".current_score_2").textContent = 0;
    roundscore = 0;
    document.querySelector(".roll_dice").style.display = "none";
  } else {
    document.querySelector(".current_score_" + activeplayer).textContent = 0;
    changeActiveplayer();

    roundscore = 0;
    document.querySelector(
      ".current_score_" + activeplayer
    ).textContent = roundscore;
  }
}







