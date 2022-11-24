import { createSinglyLinkedList, middleNode } from './index'

describe(
  `
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.
  `,
  () => {
    it('create-single-linked-list', () => {
      expect(createSinglyLinkedList([1])).toEqual({
        val: 1,
        next: null,
      })
      expect(createSinglyLinkedList([1, 2])).toEqual({
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      })
    })

    it('middle-node', () => {
      const input1 = createSinglyLinkedList([1, 2, 3, 4, 5])
      const output1 = createSinglyLinkedList([3, 4, 5])
      expect(middleNode(input1)).toEqual(output1)

      const input2 = createSinglyLinkedList([1, 2, 3, 4, 5])
      const output2 = createSinglyLinkedList([3, 4, 5])
      expect(middleNode(input2)).toEqual(output2)
    })
  })
