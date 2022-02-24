var dots = document.querySelector('.dots');
var icon = document.querySelectorAll('i');
var left = document.querySelector('.fa-solid.fa-angle-left');
var right = document.querySelector('.fa-solid.fa-angle-right');
var image = document.querySelector('img');

dots.addEventListener('click', dotsList);
left.addEventListener('click', switchLeft);
right.addEventListener('click', switchRight);

var arrayImages = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var index = 0;

function dotsList(event) {
  for (var i = 0; i < icon.length; i++) {
    if (event.target.id === icon[i].getAttribute('id')) {
      index = i - 2;
      icon[i].className = 'fa-solid fa-circle';
      image.src = arrayImages[index];
      continue;
    } else if (icon[i].getAttribute('class') === 'fa-solid fa-angle-left' || icon[i].getAttribute('class') === 'fa-solid fa-angle-right') {
      continue;
    } else {
      icon[i].className = 'fa-solid fa-circle-notch';
    }
  }
}

function switchLeft(event) {
  if (index <= 0) {
    index = 4;
    var i = index + 2;
    icon[i - 4].className = 'fa-solid fa-circle-notch';
    icon[i].className = 'fa-solid fa-circle';
    image.src = arrayImages[index];
  } else {
    index--;
    i = index + 2;
    icon[i + 1].className = 'fa-solid fa-circle-notch';
    icon[i].className = 'fa-solid fa-circle';
    image.src = arrayImages[index];
  }
}

function switchRight(event) {
  if (index >= 4) {
    index = 0;
    var i = index + 2;
    icon[i + 4].className = 'fa-solid fa-circle-notch';
    icon[i].className = 'fa-solid fa-circle';
    image.src = arrayImages[index];
  } else {
    index++;
    i = index + 2;
    icon[i - 1].className = 'fa-solid fa-circle-notch';
    icon[i].className = 'fa-solid fa-circle';
    image.src = arrayImages[index];
  }
}

function countDown() {
  setInterval(switchRight, 3000);
}

countDown();
