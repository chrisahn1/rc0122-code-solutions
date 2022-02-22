var countdown = document.querySelector('.countdown-display');
var countID;
var count = 3;

function countDownDisplay() {
  if (!countID) {
    countID = setInterval(changeText, 1000);
  }
}

function changeText() {
  if (count === 0) {
    clearInterval(countID);
    countdown.textContent = '~Earth Beeeelooowww Us~';
  } else {
    countdown.textContent = count.toString();
    count--;
  }
}

countDownDisplay();
