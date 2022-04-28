/* exported getLength */

function getLength(list) {
  if (list.next === null) {
    return 1;
  }
  let count = 0;
  let currentNode = list;

  while (currentNode != null) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
}
