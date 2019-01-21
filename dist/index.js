const btnStart = document.querySelector('.start');
const imgFirst = document.querySelector('.imgFirst');
const imgSecond = document.querySelector('.imgSecond');
const imgThird = document.querySelector('.imgThird');
const total = document.querySelector(".total");
const lastWin = document.querySelector(".win");

const startMp3 = document.querySelector(".play");

const items = [ 
  { img: "img/plum.png", value: 10},
  { img: "img/bananas.png", value: 20},
  { img: "img/pear.png", value: 30},
  { img: "img/watermelon.png", value: 40},
  { img: "img/cherries.png", value: 50},
  { img: "img/strawberry.png", value: 60},
  { img: "img/clover.png", value: 70},
  { img: "img/seven.png", value: 100},
  { img: "img/bw.png", value: 200},
  { img: "img/jackpot.png", value: 300}
];

btnStart.addEventListener("click", ()=> {
  startMp3.play();

  setImage(imgFirst, 0);
  setImage(imgFirst, 1000);
  setImage(imgFirst, 2000);

  setImage(imgSecond, 0);
  setImage(imgSecond, 1000);
  setImage(imgSecond, 2000);

  setImage(imgThird, 0);
  setImage(imgThird, 1000);
  setImage(imgThird, 2000);

  const firstRange = getRandomInRange(0, 9);
  const secondRange = getRandomInRange(0, 9);
  const thirdRange = getRandomInRange(0, 9);
  
  setTimeout(() => {
    imgFirst.setAttribute("src", items[firstRange].img)
  }, 3200);

  setTimeout(() => {
    imgSecond.setAttribute("src", items[secondRange].img)
  }, 3500)

  setTimeout(() => {
    imgThird.setAttribute("src", items[thirdRange].img)
  }, 4000)

  if (items[firstRange].value == items[secondRange].value && items[secondRange].value == items[thirdRange].value) {
    const win = items[firstRange].value * 3;
    const newTotal = +total.innerHTML + win;
    total.innerHTML = newTotal;
    lastWin.innerHTML = win;
  } else if (items[firstRange].value === items[secondRange].value || items[firstRange].value === items[thirdRange].value) {
    const win = items[firstRange].value;
    total.innerHTML = +total.innerHTML + win;
    lastWin.innerHTML = win;
  } else if (items[secondRange].value == items[thirdRange].value) {
    const win = items[secondRange].value;
    total.innerHTML = +total.innerHTML + win;

    lastWin.innerHTML = win;
  } else {
    total.innerHTML = +total.innerHTML - 50;
  }
});

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setImg(img, value) {
  for (let i = 0; i < value; i++) {
    img.setAttribute("src", items[i].img);
  }
}

function setImage(img, int) {
  for (let i = 1; i <= 10; i++) {
    let time = +(i + "00") + int;
    setTimeout(() => {
      setImg(img, i);
    }, time);
  }
}