var container = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

container.addEventListener('click', checkLanguages);

function checkLanguages(event) {
  if (event.target.matches('.tab')) {
    var valueView = event.target.getAttribute('data-view');
    for (var i = 0; i < tabs.length; i++) {
      if (event.target === tabs[i]) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    for (i = 0; i < views.length; i++) {
      if (valueView === views[i].getAttribute('data-view')) {
        views[i].className = 'view';
      } else {
        views[i].className = 'view hidden';
      }
    }
  }
}
