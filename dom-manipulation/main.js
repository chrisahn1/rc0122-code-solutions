var count = 0;

var button = document.querySelector('.hot-button');
var click = document.querySelector('.click-count');

function handleClick(event) {
  count++;
  click.textContent = 'Clicks: ' + String(count);

  if (count < 4) {
    button.className = 'hot-button cold';
  } else if (count < 7) {
    button.className = 'hot-button cool';
  } else if (count < 10) {
    button.className = 'hot-button tepid';
  } else if (count < 13) {
    button.className = 'hot-button warm';
  } else if (count < 16) {
    button.className = 'hot-button hot';
  } else {
    button.className = 'hot-button nuclear';
  }
}

button.addEventListener('click', handleClick);
