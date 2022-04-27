/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const top = queue.dequeue();
  if (queue.peek() === undefined) {
    return top;
  }
  const second = queue.dequeue();
  queue.enqueue(top);
  return second;
}
