/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount)) {
    return false;
  } else if (Number.isInteger(amount)) {
    if (amount > 0) {
      var accountDeposit = new Transaction('deposit', amount);
      this.transactions.push(accountDeposit);
      return true;
    } else {
      return false;
    }
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount)) {
    return false;
  } else if (Number.isInteger(amount)) {
    if (amount > 0) {
      var accountWithdraw = new Transaction('withdrawal', amount);
      this.transactions.push(accountWithdraw);
      return true;
    } else {
      return false;
    }
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
