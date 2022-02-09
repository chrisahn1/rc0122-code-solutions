var bulb = document.querySelector('.bulb');
var back = document.querySelector('.back');
var turnon = true;

bulb.addEventListener('click', switching);

function switching(event) {
  if (turnon === true) {
    bulb.className = 'bulb dark';
    back.className = 'back dark';
    turnon = false;
  } else {
    bulb.className = 'bulb light';
    back.className = 'back light';
    turnon = true;
  }
}
