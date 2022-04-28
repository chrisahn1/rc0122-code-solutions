/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return undefined;
  }
  if (list.next.next === null) {
    list.next = null;
  }
  const nextList = list.next.next;
  list.next = nextList;
}
