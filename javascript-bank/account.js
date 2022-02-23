/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (isNaN(amount)) {
    return false;
  } else if (!Number.isInteger(amount)) {
    return false;
  } else if (amount <= 0) {
    return false;
  } else if (typeof amount === 'string') {
    return false;
  } else if (Number.isInteger(amount)) {
    var accountDeposit = new Transaction('deposit', amount);
    this.transactions.push(accountDeposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (isNaN(amount)) {
    return false;
  } else if (!Number.isInteger(amount)) {
    return false;
  } else if (amount <= 0) {
    return false;
  } else if (typeof amount === 'string') {
    return false;
  } else if (Number.isInteger(amount)) {
    var accountWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(accountWithdraw);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var sum = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      sum += this.transactions[i].amount;
    } else {
      sum -= this.transactions[i].amount;
    }
  }
  return sum;
};
