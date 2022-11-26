import { numberOfSteps } from './index'

describe(
  `
    Given an integer num, return the number of steps to reduce it to zero.
    In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
  `,
  () => {
    it('number-of-steps', () => {
      expect(numberOfSteps(14)).toBe(6)
      expect(numberOfSteps(8)).toBe(4)
      expect(numberOfSteps(123)).toBe(12)
    })
  })
