var buttonOpen = document.querySelector('.open-modal-button');
var buttonReply = document.querySelector('.reply');
var dialogBox = document.querySelector('.box');

buttonOpen.addEventListener('click', openBox);
buttonReply.addEventListener('click', replyBox);

function openBox(event) {
  buttonOpen.disabled = true;
  dialogBox.className = 'box open';
}

function replyBox(event) {
  buttonOpen.disabled = false;
  dialogBox.className = 'box closed';
}
