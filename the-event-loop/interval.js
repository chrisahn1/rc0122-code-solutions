var count = 3;

var intervalID = setInterval(callBack, 1000);

function callBack() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  } else {
    console.log(count);
    count--;
  }
}
