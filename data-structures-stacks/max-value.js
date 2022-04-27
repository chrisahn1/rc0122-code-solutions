/* exported maxValue */

function maxValue(stack) {
  let value = stack.peek();
  if (value === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (value < stack.peek()) {
      value = stack.peek();
    }
    stack.pop();
  }
  return value;
}
