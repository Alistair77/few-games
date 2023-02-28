

var randamOfdice1 = Math.round(Math.random()* 6 )+1;

var randamDice ="images/dice" + randamOfdice1 + ".png";

document.querySelector("img").setAttribute("src",randamDice);



var randamOfdice2 = Math.round(Math.random()* 6 )+1;

var randamDice ="images/dice" + randamOfdice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randamDice);


if ( randamOfdice1 > randamOfdice2){

  document.querySelector("h2").innerHTML = "🚩Player 1 win!!!";

}
else if (randamOfdice1 < randamOfdice2){
  document.querySelector("h2").innerHTML = "Player 2🚩 win!!!";

}
else {
  document.querySelector("h2").innerHTML = " draw!! ";
}
