var btnStart = document.querySelector('.start');
var imgFirst = document.querySelector('.imgFirst');
var imgSecond = document.querySelector('.imgSecond');
var imgThird = document.querySelector('.imgThird');
var total = document.querySelector(".total");
var lastWin = document.querySelector(".win");

var startMp3 = document.querySelector(".play");

var items = [ 
  { img: "img/plum.png", value: 10, id: 2},
  { img: "img/bananas.png", value: 20, id: 1},
  { img: "img/pear.png", value: 30, id: 2},
  { img: "img/watermelon.png", value: 40, id: 2},
  { img: "img/cherries.png", value: 50, id: 2},
  { img: "img/strawberry.png", value: 60, id: 3},
  { img: "img/clover.png", value: 70, id: 2},
  { img: "img/seven.png", value: 100, id: 2},
  { img: "img/bw.png", value: 200, id: 2},
  { img: "img/jackpot.png", value: 300, id: 2},
];

btnStart.onclick = () => {
  startMp3.play();

  var firstRange = getRandomInRange(0, 9);
  var secondRange = getRandomInRange(0, 9);
  var thirdRange = getRandomInRange(0, 9);
  
  
  setTimeout(setImg, 3200);
  function setImg() {
    imgFirst.setAttribute("src", items[firstRange].img);
  };

  setTimeout(setImg1, 3500);
  function setImg1() {
    imgSecond.setAttribute("src", items[secondRange].img)
  };

  setTimeout(setImg2, 4000);
  function setImg2() {
    imgThird.setAttribute("src", items[thirdRange].img);
  };

  if (items[firstRange].value == items[secondRange].value && items[secondRange].value == items[thirdRange].value) {
    var win = items[firstRange].value * 3;
    var newTotal = +total.innerHTML + win;
    total.innerHTML = newTotal;
    lastWin.innerHTML = win;
  } else if (items[firstRange].value === items[secondRange].value || items[firstRange].value === items[thirdRange].value) {
    var win = items[firstRange].value;
    total.innerHTML = +total.innerHTML + win;
    lastWin.innerHTML = win;
  } else if (items[secondRange].value == items[thirdRange].value) {
    var win = items[secondRange].value;
    total.innerHTML = +total.innerHTML + win;

    lastWin.innerHTML = win;
  } else {
    total.innerHTML = +total.innerHTML - 50;
  }
  
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}