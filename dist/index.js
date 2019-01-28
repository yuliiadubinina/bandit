const btnStart = document.querySelector('.start');
const btnDouble = document.querySelector('.double');

let bet = document.querySelector(".score__value").innerHTML;
let index = 1;

const imgFirst = document.querySelector('.imgFirst');
const imgSecond = document.querySelector('.imgSecond');
const imgThird = document.querySelector('.imgThird');
const total = document.querySelector(".total");
const lastWin = document.querySelector(".win");

const startMp3 = document.querySelector(".play");

const items = [
  { img: "img/plum.png", value: 10 },
  { img: "img/bananas.png", value: 20 },
  { img: "img/pear.png", value: 30 },
  { img: "img/watermelon.png", value: 40 },
  { img: "img/cherries.png", value: 50 },
  { img: "img/strawberry.png", value: 60 },
  { img: "img/clover.png", value: 70 },
  { img: "img/seven.png", value: 100 },
  { img: "img/bw.png", value: 200 },
  { img: "img/jackpot.png", value: 300 }
];

changeImages(imgFirst, 0);

btnDouble.addEventListener("click", () => {
  bet = +bet + 50;
  index = index + 1;
  console.log(index);
  document.querySelector(".score__value").innerHTML = bet;

  console.log(bet);
})

btnStart.addEventListener("click", () => {
  btnStart.setAttribute("disabled", true);
  lastWin.innerHTML = "0";
  startMp3.play();

  changeImages(imgFirst, 0);
  changeImages(imgFirst, 1000);
  changeImages(imgFirst, 2000);

  changeImages(imgSecond, 100);
  changeImages(imgSecond, 1100);
  changeImages(imgSecond, 2100);

  changeImages(imgThird, 200);
  changeImages(imgThird, 1200);
  changeImages(imgThird, 2200);

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
    const win = (items[firstRange].value * 3) * index;
    const newTotal = +total.innerHTML + win;
    total.innerHTML = newTotal;
    lastWin.innerHTML = win;
  } else if (items[firstRange].value === items[secondRange].value || items[firstRange].value === items[thirdRange].value) {
    const win = items[firstRange].value * index;

    setTimeout(() => {
      total.innerHTML = +total.innerHTML + win;
      lastWin.innerHTML = win;
    }, 4200)
  } else if (items[secondRange].value == items[thirdRange].value) {
    const win = items[secondRange].value * index;
    total.innerHTML = +total.innerHTML + win;

    lastWin.innerHTML = win;
  } else {
    total.innerHTML = +total.innerHTML - bet;
  }

  setTimeout(() => {
    btnStart.removeAttribute("disabled");
  }, 4300)

  console.log(total.innerHTML);

  if (+total.innerHTML < 0) {
    total.innerHTML = "0";
    alert("Congratulations! You loser ☺")
    location.reload()

  }

});


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setImage(img, value) {
  for (let i = 0; i < value; i++) {
    img.setAttribute("src", items[i].img);
  }
}

function changeImages(img, int) {
  for (let i = 1; i <= 10; i++) {
    let time = +(i + "00") + int;
    setTimeout(() => {
      setImage(img, i);
    }, time);
  }
}