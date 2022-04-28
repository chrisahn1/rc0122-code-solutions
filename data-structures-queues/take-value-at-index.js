/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let nextValue = queue.dequeue();
  let count = 0;
  while (nextValue !== undefined && count !== index) {
    queue.enqueue(nextValue);
    nextValue = queue.dequeue();
    count++;
  }
  return nextValue;

}
