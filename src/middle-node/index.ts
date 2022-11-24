// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export const createSinglyLinkedList = (input: number[], i = 0): ListNode => {
  return {
    val: input[i],
    next: i < input.length - 1
      ? createSinglyLinkedList(input, i + 1)
      : null,
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head?.val)
    return null

  let nextNode = head
  let count = 0
  const arr = [head!.val]
  while (nextNode?.next) {
    nextNode = nextNode?.next
    count++
    arr.push(nextNode.val)
  }

  const middle = Math.ceil(count / 2)

  return createSinglyLinkedList(arr, middle)
}
