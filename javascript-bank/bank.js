/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (isNaN(balance)) {
    return null;
  } else if (!Number.isInteger(balance)) {
    return null;
  } else if (balance <= 0) {
    return null;
  } else if (typeof balance === 'string') {
    return null;
  } else if (Number.isInteger(balance)) {
    var obj = new Account(this.nextAccountNumber, holder);
    obj.deposit(balance);
    this.accounts.push(obj);
    this.nextAccountNumber++;
    return obj.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var sum = 0;
  if (this.accounts.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    sum += this.accounts[i].getBalance();
  }
  return sum;
};
