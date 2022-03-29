const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, current) => prev + current, 0);
console.log('sum: ', sum);

const initialNum = numbers[0];
const multiply = numbers.reduce((prev, current) => prev * current, initialNum);
console.log('multiply: ', multiply);

const balance = account.reduce(getBalance, 0);
function getBalance(total, acc) {
  if (acc.type === 'deposit') {
    return total + acc.amount;
  } else {
    return total - acc.amount;
  }
}
console.log('balance: ', balance);

const obj = {};
const composite = traits.reduce(getTraits, obj);
function getTraits(object, trait) {
  return Object.assign(object, trait);
}
console.log('composite: ', obj);
