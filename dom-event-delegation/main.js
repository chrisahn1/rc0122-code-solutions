var element = document.querySelector('.task-list');

element.addEventListener('click', taskList);

function taskList(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  console.log('closest(.task-list-item): ', event.target.closest('.task-list-item'));
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }

}
