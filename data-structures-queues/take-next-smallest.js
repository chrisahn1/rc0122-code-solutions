/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let firstValue = queue.dequeue();
  let nextValue = queue.peek();
  while (nextValue !== undefined) {
    if (firstValue <= nextValue) {
      break;
    }
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    nextValue = queue.peek();
  }
  return firstValue;
}
