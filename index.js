
//Player 1 dice
const randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

const randomDiceImage = "dice" + randomNumber1 + ".png";// use compactination to add dice images: dice1.png-dice6.png

const randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//Player 2 dice
const randomNumber2 = Math.floor(Math.random()*6)+1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //combined lines 5 and 7 from top

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// change text on result

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🔥 Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🔥";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}