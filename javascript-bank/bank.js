/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance)) {
    return null;
  } else if (Number.isInteger(balance)) {
    if (balance > 0) {
      var obj = new Account(this.nextAccountNumber, holder);
      obj.deposit(balance);
      this.accounts.push(obj);
      this.nextAccountNumber++;
      return obj.number;
    } else {
      return null;
    }
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
