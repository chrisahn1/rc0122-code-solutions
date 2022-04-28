/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    return list.data;
  }
  let currentNode = list;
  while (currentNode.next != null) {
    currentNode = currentNode.next;
  }
  return currentNode.data;
}
