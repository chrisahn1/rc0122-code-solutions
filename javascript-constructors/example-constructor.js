function ExampleConstructor(value) {
  this.value = value;
}

console.log('value of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor.prototype);

var constructor = new ExampleConstructor(10);

console.log('value of new ExampleConstructor: ', constructor);
console.log('instanceof ExampleConstructor: ', constructor instanceof ExampleConstructor);
