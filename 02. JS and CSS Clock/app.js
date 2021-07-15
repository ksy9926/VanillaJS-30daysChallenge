const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");

function setDate() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const hourDegree = (hour / 12) * 360 + 90;
  const minuteDegree = (minute / 60) * 360 + 90;
  const secondDegree = (second / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  console.log(`현재시간은 ${hour}시 ${minute}분 ${second}초 입니다.`);
  console.log(
    `현재각도는 ${hourDegree}도 ${minuteDegree}도 ${secondDegree}도 입니다.`
  );
}

setInterval(setDate, 1000);
setDate();
