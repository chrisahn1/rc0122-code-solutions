const takeAChance = require('./take-a-chance');

const obj = takeAChance('Chris Ahn');

obj.then(value => {
  console.log(`You won! ${value}`);
});

obj.catch(err => {
  console.error(`You lost... ${err}`);
});
