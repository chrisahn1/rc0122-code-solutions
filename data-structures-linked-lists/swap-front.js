/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  if (list.next.next === null) {
    const firstList = list;
    const secondList = list.next;
    const newListTwo = secondList;
    newListTwo.next = firstList;
    return newListTwo;

  }
  const nextList = list.next.next;
  const first = list;
  const second = list.next;
  const newList = second;
  newList.next = first;
  newList.next.next = nextList;

  return newList;
}
