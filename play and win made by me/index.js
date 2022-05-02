// var randomNumber1 = Math.random();
// randomNumber1 = (randomNumber1 * 7); writen by me
// randomNumber1 = Math.floor(randomNumber1); //we get randome num 1 to 6

var randomNumber1  = Math.floor(Math.random() * 6) + 1; // 1 to 6

var randomNumber2  = Math.floor(Math.random() * 6) + 1; // 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // we get dics1.png to dices 6.png;

var randomImagesSource = "images/" + randomDiceImage;  //images/dics1.png to dices 6.png;

var randomImagesSource2 = "images/dice" + randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

document.querySelectorAll("img")[1].setAttribute("src",randomImagesSource2);

//_________________________________________________________________________________________

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 win!"
}else if (randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "player 2 win!🚩";
}else if (randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Draw!";
}
