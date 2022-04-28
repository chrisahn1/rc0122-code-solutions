/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next === null) {
    return undefined;
  }
  const newList = new LinkedList(value);
  newList.next = list.next;
  list.next = newList;
}
