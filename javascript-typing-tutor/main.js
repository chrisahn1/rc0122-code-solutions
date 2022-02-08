var index = 0;

var element = document.querySelectorAll('span');

document.addEventListener('keydown', type);

function type(event) {
  if (event.key === element[index].textContent && index < 30) {
    element[index].className = 'green';
    index++;
  } else {
    element[index].className = 'red';
  }
  if (element[index].className !== 'red' && index < 30) {
    element[index].className = 'current';
  }
}
