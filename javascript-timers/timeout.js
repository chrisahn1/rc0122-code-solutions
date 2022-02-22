var heading = document.querySelector('.message');

function newHeading() {
  heading.textContent = 'Hello There';
}

setTimeout(newHeading, 2000);
