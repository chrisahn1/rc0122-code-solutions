var element = document.querySelectorAll('span');
var size = element.length;
var index = 0;
document.addEventListener('keydown', type);

function type(event) {
  if (event.key === element[index].textContent && index < size) {
    element[index].className = 'green';
    index++;
  } else {
    element[index].className = 'red';
  }
  if (element[index].className !== 'red' && index < size) {
    element[index].className = 'current';
  }
}
