/* exported includes */

function includes(list, value) {
  if (list.next === null && list.data === value) {
    return true;
  }
  let currentNode = list;
  while (currentNode != null) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}
