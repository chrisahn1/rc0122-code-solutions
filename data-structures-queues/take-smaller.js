/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.dequeue();
  let smallest;
  if (first < second) {
    smallest = first;
    queue.enqueue(second);
  } else {
    smallest = second;
    queue.enqueue(first);
  }
  return smallest;
}
