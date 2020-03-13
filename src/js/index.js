/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  const suite = ["♠", "♣", "♥", "♦"];

  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const selectRandomIndex = array =>
    array[Math.floor(Math.random() * (array.length - 1 - 0) + 0)];

  const suiteToClass = suite => {
    switch (suite) {
      case "♠":
        return "spades";
      case "♣":
        return "clubs";
      case "♥":
        return "hearts";
      case "♦":
        return "diamonds";
    }
  };

  const suiteEl = document.querySelectorAll(".suite");
  const numberEl = document.querySelector(".number");

  const suitevalue = selectRandomIndex(suite);
  const numbervalue = selectRandomIndex(number);

  console.log(suitevalue, numbervalue);
  console.log(suiteEl);
  suiteEl.forEach(el => {
    el.classList.add(suiteToClass(suitevalue));
    el.textContent = suitevalue;
  });
  numberEl.textContent = numbervalue;
};
